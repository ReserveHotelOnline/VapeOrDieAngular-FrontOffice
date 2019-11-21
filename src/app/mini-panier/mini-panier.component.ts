import { Component, OnInit } from '@angular/core';
import {style} from '@angular/animations';
import {NavComponent} from '../nav/nav.component';
interface CartProdcut {
  name: string;
  price: number;
  qte: number;
}

@Component({
  selector: 'app-mini-panier',
  templateUrl: './mini-panier.component.html',
  styleUrls: ['./mini-panier.component.css']
})
export class MiniPanierComponent implements OnInit {
  private tabRes: CartProdcut[];
  private allProductStringRes: string;
  private qte: number;

  constructor(private navComponent: NavComponent) {
  }

  ngOnInit() {
    this.qte = 0;
    this.allProductStringRes = localStorage.getItem('panierKey');
    this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes);
  }
  recup() {

    this.allProductStringRes = localStorage.getItem('panierKey');
    this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes) ;
  }

  hide() {

    this.navComponent.hideShowPan(2);
  }

  incr(n: string) {
    for (const f of this.tabRes) {
      if (f.name === n) {
        f.qte++;
        this.qte++;
        break; }}
    this.allProductStringRes = JSON.stringify(this.tabRes);
    localStorage.setItem('panierKey', this.allProductStringRes);
  }
  suppProduct(n) {
    this.allProductStringRes = localStorage.getItem('panierKey');
    this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes) ;
    let i = 0 ;
    for (let f of this.tabRes) {
      if (f.name === n) {
        this.tabRes.splice(i, 1);
      }
      i++ ;
    }
    this.allProductStringRes = JSON.stringify(this.tabRes);
    localStorage.setItem('panierKey', this.allProductStringRes);
  }

}
