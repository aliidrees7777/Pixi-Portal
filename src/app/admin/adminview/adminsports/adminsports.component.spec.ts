import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsportsComponent } from './adminsports.component';

describe('AdminsportsComponent', () => {
  let component: AdminsportsComponent;
  let fixture: ComponentFixture<AdminsportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
