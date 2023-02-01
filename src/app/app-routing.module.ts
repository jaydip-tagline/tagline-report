import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormarrayComponent } from './features/report/components/demo-formarray/demo-formarray.component';
import { HttpClientComponent } from './features/http/components/http-client/http-client.component';

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
