import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectworkflowComponent } from './sectworkflow.component';

describe('SectworkflowComponent', () => {
  let component: SectworkflowComponent;
  let fixture: ComponentFixture<SectworkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectworkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
