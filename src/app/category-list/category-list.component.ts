import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';
import {Category} from '../category';

interface MyObj {
  idProduit: number;
  nbProduit: number;
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  tab: [];
  panier1: MyObj;
  panier2: MyObj;
  panier3: MyObj;
  categories;
  tabReq: MyObj[];
  tabRes: MyObj[];
  tabPanier;
  allProductStringReq: string;
  allProductStringRes: string;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
    localStorage.clear();
    this.allProductStringRes = localStorage.getItem('panierKey');
    this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes) ;
    // Function coming ***********************************************************
  /*  this.allProductStringReq = JSON.stringify(this.tabReq);
    localStorage.setItem('panierKey', this.allProductStringReq);*/
  }

  reloadData() {
    this.categories = this.categoryService.getCategoriesList().subscribe(r => {
      this.tab = r;
      console.log(this.tab) ;
    });


  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error1 => console.log(error1));
  }

  categoryDetails(id: number) {
    this.router.navigate(['detailCategory', id]);
  }

  updateCategory(id: number) {
    this.reloadData();
    this.router.navigate(['updateCategory', id]);
  }

  addPanierListe(id: number , qte: number) {
if (this.tabRes !== null) {
    for (let f of this.tabRes) {
      if (f.idProduit === id) {
        f.nbProduit = f.nbProduit + qte;
      } else { this.panier3 = {idProduit: id , nbProduit: qte} ;
               this.tabRes.push(this.panier3); break ;
      }
    }
    this.tabRes = [] ;
    this.tabRes.push(this.panier3 = {idProduit: id , nbProduit: qte});
}
  }


}
