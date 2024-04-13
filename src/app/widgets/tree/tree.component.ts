import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from './model/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit {

  @Input() node!: TreeNode;

  renderAs = ['Node', 'Node 1', 'Node 2'];
  valueKeys = ['Candidate', 'Employee'];
  valueList = ['Main Phone', 'Secondary Phone'];
  dataTypes = ['Number', 'String'];
  requiredOptions = ['Yes', 'No'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.node.form = this.createForm();
  }

  public toggle(): void {
    this.node.expand = !this.node.expand;
  }

  public add(): void {
    const nextId = this.node.children.length + 1
    const newNode = {
      id: nextId,
      title: `New Node ${this.node.id}.${nextId}`,
      children: [],
      parent: this.node,
      edit: false,
      expand: false
    };

    this.node.children.push(newNode);
  }

  public edit(): void {
    this.node.edit = !this.node.edit;
  }

  public delete(): void {
    const parentNode = this.getParentNode(this.node);

    if (parentNode) {
      parentNode.children = parentNode.children.filter((child: any) => child.id !== this.node.id);
    }
  }

  private getParentNode(node: any): any {
    if (!node || !node.parent) {
      return null;
    }

    return node.parent;
  }

  private createForm(): FormGroup {
    return this.fb.group({
      renderAs: new FormControl('', Validators.required),
      nodeName: new FormControl('', Validators.required),
      valueKey: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      defaultValue: new FormControl('', Validators.required),
      dataType: new FormControl('', Validators.required),
      isRequired: new FormControl('', Validators.required),
    });
  }
}
