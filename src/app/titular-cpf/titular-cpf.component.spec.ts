/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitularCpfComponent } from './titular-cpf.component';

describe('TitularCpfComponent', () => {
  let component: TitularCpfComponent;
  let fixture: ComponentFixture<TitularCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitularCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
