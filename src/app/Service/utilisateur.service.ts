import { Injectable } from '@angular/core';

import { Utilisateur } from '../models/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationOk } from '../models/authentification-ok';
import { User } from '../models/user';
import { AuthentificationResponse } from '../models/authentification-response';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  CatchToken(u:Utilisateur){


    let utilisateur = new User();
    utilisateur.username = u.mail;
    utilisateur.password = u.mdp;
    console.log(utilisateur.username)
    console.log(utilisateur.password)
    return this.http.post<AuthentificationResponse>("http://localhost:8017/loginUserJwt",utilisateur);

  }

  afficherTousLesUtilisateurs(){
    return this.http.get<Utilisateur[]>("http://localhost:8017/admin/listUsers");// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }

   ajouterUnUtilisateur(u:Utilisateur){
    return this.http.post<Utilisateur>(`http://localhost:8017/admin/addNewUser`,u);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }

  deleteUtilisateur(id:number){
    return this.http.delete(`http://localhost:8017/admin/deleteUser/${id}`);// retourne un observable (et pas directement une liste de personne)
    //return this.listePersonneAPI;
  }
}
