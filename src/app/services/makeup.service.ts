import { Injectable } from '@angular/core';
import { Makeup } from '../model/makeup.model';



@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  makeup : Makeup[]; 
  Makeup : Makeup

  constructor() { 
    this.makeup= [
      {idMakeup : 1, nomMakeup : "foundation morphe", prixMakeup : 150.900, dateCreation : new Date("01/14/2018")},
      {idMakeup : 2, nomMakeup : "palette morphe", prixMakeup : 250, dateCreation : new Date("12/17/2018")},
      {idMakeup : 3, nomMakeup :"lipstick morphe ", prixMakeup : 120, dateCreation : new Date("02/20/2019")},
      {idMakeup : 4, nomMakeup :" blush morphe ", prixMakeup : 90, dateCreation : new Date("02/20/2019")}
      ];
  }
  listeMakeup():Makeup[]{
    return this.makeup;

  }
  ajouterMakeup( makeup: Makeup){
    this.makeup.push(makeup);
  }
    supprimerMakeup( prod: Makeup){
      //supprimer le produit prod du tableau produits
      const index = this.makeup.indexOf(prod, 0);
      if (index > -1) {
      this.makeup.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); */
      }

      consulterMakeup(id:number): Makeup{
        this.Makeup = this.makeup.find(p => p.idMakeup == id);
        return this.Makeup;
        
        }
        
        updateMakeup(p:Makeup)
      {
      // console.log(p);
        this.supprimerMakeup(p);
        this.ajouterMakeup(p);
        
          }

}
