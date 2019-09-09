import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../star/star.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../products/product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarComponent,
        ConvertToSpacesPipe,
        ProductDetailComponent],
        imports: [
          RouterTestingModule,
          HttpClientModule
        ],
        providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
