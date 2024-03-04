import { Component } from '@angular/core';
import { applicationData } from './json/applicationData';
import { formData } from './json/formData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jp from 'jsonpath';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  application = applicationData;
  formData = formData;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  getFormGroup(key: string): FormGroup {
    return this.form.get(key) as FormGroup ?? new FormGroup({});
  }

  getSectionForm(control: any): FormGroup {
    return control.value as FormGroup;
  }

  private buildForm(): void {
    this.form = this.fb.group({});

    this.formData.forEach((section, sectionIndex) => {
      const key = `${section.taskId}1_${section.taskStatus}`;
      const workingAreaKey = `${sectionIndex}2_WorkingArea`;
      const relInfKey = `${sectionIndex}_RelevantInformation`;
      console.log('key ' + sectionIndex, key);
      const formGroup = this.fb.group({});
      formGroup.addControl(
        workingAreaKey,
        this.buildFormSection(section.workingArea || [], sectionIndex)
      );

      const waCtrl = formGroup.get(workingAreaKey) as any;

      if (waCtrl) {
        waCtrl['title'] = 'Working Area';
        waCtrl['showEdit'] = section.taskStatus === 'PENDING';
        waCtrl['edit'] = false;
      }

      formGroup.addControl(
        relInfKey,
        this.buildFormSection(section.relevantInfo || [], sectionIndex)
      );

      const relCtrl = formGroup.get(relInfKey) as any;

      if (relCtrl) {
        relCtrl['title'] = 'Relevant Information';
        relCtrl['showEdit'] = false;
        relCtrl['edit'] = false;
      }

      this.form.addControl(key, formGroup);
    });
  }

  private buildFormSection(fields: any[], sectionIndex: number): FormGroup {
    const childFormGroup = this.fb.group({});
    fields.forEach((field, fieldIndex) => {
    this.getValueByJsonPath(field);

      childFormGroup.addControl(
        field.fieldName,
        this.fb.control(
          // this.getValueByPath(field.jsonPath, sectionIndex, fieldIndex),
          this.getValueByJsonPath(field),
          field.required === "Y" ? Validators.required : null
        )
      );

      const ctrl = childFormGroup.get(field.fieldName) as any;

      if (field.fieldType === "dropdown") {
        ctrl['fieldType'] = field.fieldType;
        ctrl['jsonPath'] = field.jsonPath;
        ctrl['fieldValues'] = field.fieldValues || [];
      } else {
        field.fieldType = "textbox";
        ctrl['fieldType'] = field.fieldType;
        ctrl['jsonPath'] = field.jsonPath;
      }
    });

    return childFormGroup;
  }

  private getValueByPath(path: string, sectionIndex: number, fieldIndex: number): any {
    //console.log(`SectionIndex: ${sectionIndex} | fieldIndex: ${fieldIndex} | path: {path}`);
    const keys = path?.split('.') || [];

    let currentValue: any = this.application;

    keys.forEach(key => {
        if (key.endsWith(']')) {
          if (key === 'application[*]') {
            currentValue = currentValue[0];
          } else if (key === 'applicants[*]') {
            currentValue = currentValue?.['applicants']?.[sectionIndex];
          }
          else {
            key = key.split('[')[0];
            currentValue = currentValue?.[key]?.[0] || '';
          }
        } else {
          currentValue = currentValue?.[key];
        }
    });

    return currentValue;
  }

  private getValueByJsonPath(field: any): any {
    const { fieldName, jsonPath } = field;
    return jp.value(this.application, jsonPath);
  }

  private updateData(controls: any): void {
    const copyData = JSON.parse(JSON.stringify(this.application));
    for (const key in controls) {
      const { jsonPath, value } = controls[key];
      const node = jp.nodes(copyData, jsonPath)[0];

      if (node) {
        jp.value(copyData, jsonPath, value);
      }
    }

    console.log('Final Data ::: ', copyData);
  }

  public onSubmit(): void {
    console.log('onSubmit', this.form);
  }

  public onSectionEdit(section: any): void {
    if (section.value.edit) {
      this.updateData(section.value.controls);
    }
    section.value.edit = !section.value.edit;
  }

  public log(data: any): void {
    console.log(data);
  }
}
