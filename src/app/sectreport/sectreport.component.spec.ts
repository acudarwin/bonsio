import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectreportComponent } from './sectreport.component';

describe('SectreportComponent', () => {
  let component: SectreportComponent;
  let fixture: ComponentFixture<SectreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
