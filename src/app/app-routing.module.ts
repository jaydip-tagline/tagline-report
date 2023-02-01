import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormarrayComponent } from './features/report/components/demo-formarray/demo-formarray.component';
import { HttpClientComponent } from './features/http/components/http-client/http-client.component';
import { UserResolver } from './features/http/resolver/user.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: DemoFormarrayComponent,
  },
  {
    path: 'request',
    loadChildren: () =>
      import('../app/features/http/http.module').then((x) => x.HttpModule),
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
