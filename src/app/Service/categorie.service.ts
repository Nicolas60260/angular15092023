import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  allCategorie(){
    return this.http.get<Categorie[]>(`http://localhost:8017/admin/listCategories`);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }

  CategorieParIdAnnonce(id:number){
    return this.http.get<Categorie>(`http://localhost:8017/public/queryAnnonce/${id}`);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }

  AfficherListCategorie(){
    return this.http.get<Categorie[]>(`http://localhost:8017/public/listCategories`);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }

 
}
