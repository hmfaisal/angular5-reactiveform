import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { CommonCompoModule } from '../common-compo/common-compo.module';


import { ApplicationsRoutes } from './applications.routing';
import { ApplicationsComponent } from './applications.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SelectionComponent } from './components/selection/selection.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CommunicationScaleComponent } from './components/assessment/components/communicationScale/communicationScale.component';
import { OutdoorScaleComponent } from './components/assessment/components/outdoorScale/outdoorScale.component';
import { FoodScaleComponent } from './components/assessment/components/foodScale/foodScale.component';
import { FashionScaleComponent } from './components/assessment/components/fashionScale/fashionScale.component';
import { LaborScaleComponent } from './components/assessment/components/laborScale/laborScale.component';
import { PracticalScaleComponent } from './components/assessment/components/practicalScale/practicalScale.component';
import { ResearchScaleComponent } from './components/assessment/components/researchScale/researchScale.component';
import { BusinessScaleComponent } from './components/assessment/components/businessScale/businessScale.component';
import { EducationScaleComponent } from './components/assessment/components/educationScale/educationScale.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    PerfectScrollbarModule,
    CommonCompoModule,
    RouterModule.forChild(ApplicationsRoutes),
  ],
  declarations: [
    ApplicationsComponent,
    RegistrationComponent,
    SelectionComponent,
    AssessmentComponent,
    CommunicationScaleComponent,
    OutdoorScaleComponent,
    FoodScaleComponent,
    FashionScaleComponent,
    LaborScaleComponent,
    PracticalScaleComponent ,
    ResearchScaleComponent,
    BusinessScaleComponent,
    EducationScaleComponent
  ],
  exports:[
    RegistrationComponent,
    SelectionComponent,
    AssessmentComponent,
    CommunicationScaleComponent,
    OutdoorScaleComponent,
    FoodScaleComponent,
    FashionScaleComponent,
    LaborScaleComponent,
    PracticalScaleComponent ,
    ResearchScaleComponent,
    BusinessScaleComponent,
    EducationScaleComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ApplicationsModule { }