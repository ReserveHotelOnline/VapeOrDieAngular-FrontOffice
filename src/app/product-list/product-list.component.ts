import { Component, OnInit } from '@angular/core';
import {ServiceProductService} from '../service-product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  private p: Product;
  constructor(private serviceP: ServiceProductService) { }

  ngOnInit() {
    this.serviceP.getProductList().subscribe(r => console.log(r));
    this.p = new Product();
  }
  addPanier(){
    this.serviceP.addProduct(this.p).subscribe();
  }

}
