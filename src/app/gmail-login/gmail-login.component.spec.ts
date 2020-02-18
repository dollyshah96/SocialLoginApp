import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailLoginComponent } from './gmail-login.component';

describe('GmailLoginComponent', () => {
  let component: GmailLoginComponent;
  let fixture: ComponentFixture<GmailLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
