import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningPlatformRoutingModule {
  constructor() {
    console.log('test');
  }
}

export const routingComponents = [
                                  LoginComponent
                                 ];
