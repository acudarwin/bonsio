import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectlivereportComponent } from './sectlivereport.component';

describe('SectlivereportComponent', () => {
  let component: SectlivereportComponent;
  let fixture: ComponentFixture<SectlivereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectlivereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectlivereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
