import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormarrayComponent } from './demo-formarray/demo-formarray.component';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  {
    path: 'home',
    component: DemoFormarrayComponent,
  },
  {
    path: 'request',
    component: HttpClientComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
