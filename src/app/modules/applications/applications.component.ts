import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable, Subject } from 'rxjs';
import {
  DataService,
} from '../../services';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit , OnDestroy {

  @Input() currentview: string;
  private subscription = new Subscription();

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.subscription.add(this.dataService.currentView.subscribe(value => {
      this.currentview = value;
    }));
    this.currentview = "REGISTRATION";
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.dataService.clearView();
  }

}
