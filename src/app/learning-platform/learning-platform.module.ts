import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPlatformRoutingModule, routingComponents } from './learning-platform-routing.module';
import { DemoMaterialModule } from '../core/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullPageComponent } from './components/full-page/full-page.component';
import { AboutComponent } from './components/about/about.component';
import { AvailableModulesComponent } from './components/available-modules/available-modules.component';
import { TakenModulesComponent } from './components/taken-modules/taken-modules.component';

@NgModule({
  declarations: [routingComponents, FullPageComponent, AboutComponent, AvailableModulesComponent, TakenModulesComponent],
  imports: [
    LearningPlatformRoutingModule,
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LearningPlatformModule { }
