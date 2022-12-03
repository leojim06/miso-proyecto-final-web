import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFoodComponent } from './profile-food.component';

describe('ProfileFoodComponent', () => {
  let component: ProfileFoodComponent;
  let fixture: ComponentFixture<ProfileFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
