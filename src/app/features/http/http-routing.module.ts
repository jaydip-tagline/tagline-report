import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { UserResolver } from './resolver/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: HttpClientComponent,
    resolve: { usersdetails: UserResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule {}
