import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PlayComponent } from './components/play/play.component';

const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full' },
  { path: 'dynamic', component: DynamicFormComponent },
  { path: 'play', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
