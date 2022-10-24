import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PackService } from './pack.service';

describe('PackService', () => {
  let service: PackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
