import {IProduct} from './product';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private _productUrl = '../api/products/products.json';

  constructor(private _http : HttpClient){

  }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
                .do(data => console.info('products: ' + JSON.stringify(data)))
                .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse){
    return Observable.throw(error.message);
  }
}
