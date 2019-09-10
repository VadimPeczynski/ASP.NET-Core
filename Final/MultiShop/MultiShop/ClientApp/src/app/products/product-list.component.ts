import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    filteredProducts: IProduct[];
    pageTitle = 'Lista produktów';
    title = 'Lista produktów';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean;
    private _listFilter: string;
    products: IProduct[];

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products: IProduct[]) => {
            this.products = products;
            this.filteredProducts =  this.products;
        });
    }
    constructor(private productService: ProductService) {
    }
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }

    onStarRatingClicked(message: string) {
        this.title = `${this.pageTitle}:${message}`;
    }

    performFiltering(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }
}
