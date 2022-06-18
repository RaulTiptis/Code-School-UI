import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaModuleComponent } from './java-module.component';

describe('JavaModuleComponent', () => {
  let component: JavaModuleComponent;
  let fixture: ComponentFixture<JavaModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
