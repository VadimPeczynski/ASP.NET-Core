import { TestBed, async, inject } from '@angular/core/testing';

import { ProductGuard } from './product-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([ProductGuard], (guard: ProductGuard) => {
    expect(guard).toBeTruthy();
  }));
});
