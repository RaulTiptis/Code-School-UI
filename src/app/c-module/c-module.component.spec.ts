import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CModuleComponent } from './c-module.component';

describe('CModuleComponent', () => {
  let component: CModuleComponent;
  let fixture: ComponentFixture<CModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
