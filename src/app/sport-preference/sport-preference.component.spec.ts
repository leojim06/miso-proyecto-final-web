import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportPreferenceComponent } from './sport-preference.component';

describe('SportPreferenceComponent', () => {
  let component: SportPreferenceComponent;
  let fixture: ComponentFixture<SportPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportPreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
