import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectwholeComponent } from './sectwhole.component';

describe('SectwholeComponent', () => {
  let component: SectwholeComponent;
  let fixture: ComponentFixture<SectwholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectwholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectwholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
