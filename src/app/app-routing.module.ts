import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormarrayComponent } from './demo-formarray/demo-formarray.component';

const routes: Routes = [
  {
    path: '',
    component: DemoFormarrayComponent,
  },
  {
    path: 'home',
    component: DemoFormarrayComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
