import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('init details');
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle = this.pageTitle + ' ' + id;
  }

  onBack() : void {
    this._router.navigate(['/products']);
  }
}
