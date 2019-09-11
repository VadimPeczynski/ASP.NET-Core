import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Szczegóły produktu';
  product: IProduct;
  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
