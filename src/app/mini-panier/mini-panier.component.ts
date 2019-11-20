import { Component, OnInit } from '@angular/core';

interface Product {
  idProduit: number;
  nbProduit: number;
  imgProduit: string;
  nomProduit: string;
}
@Component({
  selector: 'app-mini-panier',
  templateUrl: './mini-panier.component.html',
  styleUrls: ['./mini-panier.component.css']
})
export class MiniPanierComponent implements OnInit {
  private tabRes: Product[];
  private allProductStringRes: string;

  constructor() {}

  ngOnInit() {
    this.allProductStringRes = localStorage.getItem('panierKey');
    this.tabRes = JSON.parse(this.allProductStringRes);
  }

}
