import { Component, OnInit, OnDestroy, Input,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';

import { CommunicationScaleComponent } from './components/communicationScale/communicationScale.component';
import { OutdoorScaleComponent } from './components/outdoorScale/outdoorScale.component';
import { FoodScaleComponent } from './components/foodScale/foodScale.component';
import { FashionScaleComponent } from './components/fashionScale/fashionScale.component';
import { LaborScaleComponent } from './components/laborScale/laborScale.component';
import { PracticalScaleComponent } from './components/practicalScale/practicalScale.component';
import { ResearchScaleComponent } from './components/researchScale/researchScale.component';
import { BusinessScaleComponent } from './components/businessScale/businessScale.component';
import { EducationScaleComponent } from './components/educationScale/educationScale.component';

import {
  DataService,
} from '../../../../services';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit, OnDestroy {

  form: FormGroup;
  currentview:any;
  outdoorView:boolean=true;
  foodView:boolean=false;
  fashionView:boolean=false;
  laborView:boolean=false;
  practicalView:boolean=false;
  researchView:boolean=false;
  businessView:boolean=false;
  educationView:boolean=false;
  communicationView:boolean=false;
  nextButtonView:boolean=false;
  
  submitted = false;
  private subscription = new Subscription();
  error: string;
  success: string;

  @ViewChild(OutdoorScaleComponent) outdoorComponent: OutdoorScaleComponent;
  @ViewChild(CommunicationScaleComponent) communicationComponent: CommunicationScaleComponent;
  @ViewChild(FoodScaleComponent) foodComponent: FoodScaleComponent;
  @ViewChild(FashionScaleComponent) fashionComponent: FashionScaleComponent;
  @ViewChild(LaborScaleComponent) laborComponent: LaborScaleComponent;
  @ViewChild(PracticalScaleComponent) practicalComponent: PracticalScaleComponent;
  @ViewChild(ResearchScaleComponent) researchComponent: ResearchScaleComponent;
  @ViewChild(BusinessScaleComponent) businessComponent: BusinessScaleComponent;
  @ViewChild(EducationScaleComponent) educationComponent: EducationScaleComponent;

  constructor(
    private translate: TranslateService,
    public snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.subscription.add(this.dataService.currentAssessmentView.subscribe(value => {
      if(value=="FOODVIEW"){
        this.foodView = true;
      }
      else if(value=="FASHIONVIEW"){
        this.fashionView = true;
      }
      else if(value=="LABORVIEW"){
        this.laborView = true;
      }
      else if(value=="PRACTICALVIEW"){
        this.practicalView = true;
      }
      else if(value=="RESEARCHVIEW"){
        this.researchView = true;
      }
      else if(value=="BUSINESSVIEW"){
        this.businessView = true;
      }
      else if(value=="EDUCATIONVIEW"){
        this.educationView = true;
      }
      else if(value=="COMMUNICATIONVIEW"){
        this.communicationView = true;
      }
      else if(value=="NEXTBUTTONVIEW"){
        this.nextButtonView = true;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onSubmit() {
    const assessmentForm: any = {
      outdoorForm: this.outdoorComponent.outdoorform,
      foodForm: this.foodComponent.foodform,
      fashionForm: this.fashionComponent.fashionform,
      laborForm: this.laborComponent.laborform,
      practicalForm: this.practicalComponent.practicalform,
      researchForm: this.researchComponent.researchform,
      businessForm: this.businessComponent.businessform,
      educationForm: this.educationComponent.educationform,
      communicationForm: this.communicationComponent.communicationform,
    }
    console.log(assessmentForm);

  }

}
