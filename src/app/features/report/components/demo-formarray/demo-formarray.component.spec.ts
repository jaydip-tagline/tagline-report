import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormarrayComponent } from './demo-formarray.component';

describe('DemoFormarrayComponent', () => {
  let component: DemoFormarrayComponent;
  let fixture: ComponentFixture<DemoFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
