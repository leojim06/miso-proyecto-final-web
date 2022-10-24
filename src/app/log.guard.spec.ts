import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { logGuard } from './log.guard';


describe('LogGuard', () => {
  let guard: logGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    guard = TestBed.inject(logGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
