import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSportComponent } from './profile-sport.component';

describe('ProfileSportComponent', () => {
  let component: ProfileSportComponent;
  let fixture: ComponentFixture<ProfileSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
