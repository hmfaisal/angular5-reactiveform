/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FashionScaleComponent } from './fashionScale.component';

describe('FashionScaleComponent', () => {
  let component: FashionScaleComponent;
  let fixture: ComponentFixture<FashionScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
