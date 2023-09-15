import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Annonce } from '../models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  afficherToutesLesAnnonces(){
    return this.http.get<Annonce[]>("http://localhost:8017/public/listAnnonce");// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }
  ajoutAnnonce(annonce:Annonce){
    return this.http.post<Annonce>("http://localhost:8017/public/AjoutAnnonce",annonce);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }
}
