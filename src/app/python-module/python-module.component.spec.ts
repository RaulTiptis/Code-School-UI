import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonModuleComponent } from './python-module.component';

describe('PythonModuleComponent', () => {
  let component: PythonModuleComponent;
  let fixture: ComponentFixture<PythonModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
