import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectgranularComponent } from './sectgranular.component';

describe('SectgranularComponent', () => {
  let component: SectgranularComponent;
  let fixture: ComponentFixture<SectgranularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectgranularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectgranularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
