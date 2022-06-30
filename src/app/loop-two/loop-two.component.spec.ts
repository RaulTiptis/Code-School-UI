import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopTwoComponent } from './loop-two.component';

describe('LoopTwoComponent', () => {
  let component: LoopTwoComponent;
  let fixture: ComponentFixture<LoopTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
