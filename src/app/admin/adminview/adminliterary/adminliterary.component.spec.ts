import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminliteraryComponent } from './adminliterary.component';

describe('AdminliteraryComponent', () => {
  let component: AdminliteraryComponent;
  let fixture: ComponentFixture<AdminliteraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminliteraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminliteraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
