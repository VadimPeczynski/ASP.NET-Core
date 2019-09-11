import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "app-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  filteredProducts: IProduct[];
  pageTitle = "Lista produktów";
  title = "Lista produktów";
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean;
  private _listFilter: string;
  products: IProduct[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
      this.filteredProducts = this.products;
    });
  }
  constructor(private productService: ProductService) {}
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFiltering(this.listFilter)
      : this.products;
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }

  addProduct() {
    let product: IProduct = {
      productId: 0,
      productName: "Piła",
      productCode: "TBX-0022",
      releaseDate: "15.06.2016",
      description: "Stalowa piła ręczna",
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    };
    this.productService.addProduct(product).subscribe(() => {
      this.productService.getProducts().subscribe((products: IProduct[]) => {
        this.products = products;
        this.filteredProducts = this.products;
      });
    });
  }

  editProduct(product: IProduct) {
    this.productService.updateProduct(product).subscribe(() => {
      this.productService.getProducts().subscribe((products: IProduct[]) => {
        this.products = products;
        this.filteredProducts = this.products;
      });
    });
  }

  deleteProduct(product: IProduct) {
    this.productService.deleteProduct(product.productId).subscribe(() => {
      this.productService.getProducts().subscribe((products: IProduct[]) => {
        this.products = products;
        this.filteredProducts = this.products;
      });
    });
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
