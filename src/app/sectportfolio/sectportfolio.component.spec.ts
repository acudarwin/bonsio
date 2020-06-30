import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectportfolioComponent } from './sectportfolio.component';

describe('SectportfolioComponent', () => {
  let component: SectportfolioComponent;
  let fixture: ComponentFixture<SectportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
