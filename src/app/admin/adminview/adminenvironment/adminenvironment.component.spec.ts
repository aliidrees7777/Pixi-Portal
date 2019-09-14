import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminenvironmentComponent } from './adminenvironment.component';

describe('AdminenvironmentComponent', () => {
  let component: AdminenvironmentComponent;
  let fixture: ComponentFixture<AdminenvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminenvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminenvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
