import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private viewSource = new BehaviorSubject<string>("empty");
    currentView = this.viewSource.asObservable();
    private assessmentViewSource = new BehaviorSubject<string>("empty");
    currentAssessmentView = this.assessmentViewSource .asObservable();
    private dateAddSource = new BehaviorSubject<any>("empty");
    currentAddedDate = this.dateAddSource.asObservable();

    constructor() { }

    changeView(view:string) {
        this.viewSource.next(view);
    }

    clearView() {
        this.viewSource.next("empty");
    }

    changeAssessmentView(view:string) {
        this.assessmentViewSource.next(view);
    }

    clearAssessmentView() {
        this.assessmentViewSource.next("empty");
    }

    changeDateAdd(data: any) {
        this.dateAddSource.next(data);
    }

    clearDateAdd() {
        this.dateAddSource.next("empty");
    }

}