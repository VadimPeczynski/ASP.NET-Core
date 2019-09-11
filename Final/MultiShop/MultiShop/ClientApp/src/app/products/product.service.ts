
import {throwError as observableThrowError} from 'rxjs';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
    //private _productUrl: string = '../../api/products/products.json';
    private _productUrl: string = "api/Product";
    constructor(private _http: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            //tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id:number): Observable<IProduct>{
        const url = `${this._productUrl}/${id}`;
        return this._http.get<IProduct>(url).pipe(
            catchError(this.handleError)
        ); 
    }

    deleteProduct(id:number): Observable<{}>{
        const url = `${this._productUrl}/${id}`;
        return this._http.delete(url).pipe(
            catchError(this.handleError)
        ); 
    }

    addProduct(product: IProduct): Observable<IProduct>{
        return this._http.post<IProduct>(this._productUrl, product).pipe(
            catchError(this.handleError)
        ); 
    }

    updateProduct(product: IProduct): Observable<IProduct>{
        product.productCode += '1';
        const url = `${this._productUrl}/${product.productId}`;
        return this._http.put<IProduct>(url, product).pipe(
            catchError(this.handleError)
        ); 
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return observableThrowError(err.message);
    }
}
