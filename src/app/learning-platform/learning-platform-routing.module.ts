import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FullPageComponent } from './components/full-page/full-page.component';
import { AboutComponent } from './components/about/about.component';
import { AvailableModulesComponent } from './components/available-modules/available-modules.component';
import { TakenModulesComponent } from './components/taken-modules/taken-modules.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: FullPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
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
                                  LoginComponent,
                                  RegisterComponent,
                                  FullPageComponent,
                                  AboutComponent,
                                  AvailableModulesComponent,
                                  TakenModulesComponent
                                 ];
