/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaborScaleComponent } from './laborScale.component';

describe('LaborScaleComponent', () => {
  let component: LaborScaleComponent;
  let fixture: ComponentFixture<LaborScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
