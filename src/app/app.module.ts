import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { KeysPipe } from './Pipes/KeysPipe';
import { BrowserModule } from '@angular/platform-browser';
import { TreeComponent } from './widgets/tree/tree.component';
import { PlayComponent } from './components/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    KeysPipe,
    TreeComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
