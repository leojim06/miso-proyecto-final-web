import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePartnerComponent } from './welcome-partner.component';

describe('WelcomePartnerComponent', () => {
  let component: WelcomePartnerComponent;
  let fixture: ComponentFixture<WelcomePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
