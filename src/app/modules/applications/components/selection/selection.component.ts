import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';

import { COMPANIES } from '../../../../model/companies';
import { SELECTION } from '../../../../model/selection';

import {
  DataService,
  SelectionService
} from '../../../../services';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnDestroy {

  form: FormGroup;
  submitted = false;
  private subscription = new Subscription();
  error: string;
  success: string;
  companies = COMPANIES;
  positions: any;
  selectedTime: any;
  isTimeView: boolean = false;
  isInterestsView: boolean = false;
  isMotivationsView: boolean = false;

  constructor(
    private translate: TranslateService,
    public snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private selectionService: SelectionService,
  ) {
    this.subscription.add(translate.get('WRONG_ERROR').subscribe((res: string) => {
      this.error = res;
    }));
    this.subscription.add(this.dataService.currentAddedDate.subscribe(value => {
      this.selectedTime = value;
      if (this.selectedTime != 'empty') {
        this.isInterestsView = true;
      }
    }));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      companyname: ['', Validators.compose([Validators.required])],
      position: ['', Validators.compose([Validators.required])],
      joiningtime: [this.selectedTime, Validators.compose([Validators.required])],
      isintern: ['', Validators.compose([Validators.required])],
      interests: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      motivations: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(2000)])]
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const selection: SELECTION = {
      companyname: this.form.value.companyname,
      position: this.form.value.position,
      joiningtime: this.selectedTime,
      isintern: this.form.value.isintern,
      interests: this.form.value.interests,
      motivations: this.form.value.motivations
    };
    this.subscription.add(this.selectionService.addSelection(selection)
      .subscribe(data => {

      },
      error => {

      }));
    this.dataService.changeView('ASSESSMENT');
  }

  onSelectionChange(selectedcompany: any) {
    for (let company of this.companies) {
      if (company.name == selectedcompany.name) {
        this.positions = company.position;
      }
    }
  }

  onViewChange(currentView: string) {
    if (currentView == 'position') {
      this.isTimeView = true;
    }
    if (currentView == 'interests') {
      this.isMotivationsView = true;
    }
  }

}
