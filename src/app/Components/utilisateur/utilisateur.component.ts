import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  listeUtilisateur!:Utilisateur[];
  UtilisateurAAjouter!:Utilisateur;

  constructor(private uservice:UtilisateurService, private router: Router){
  }

  ngOnInit(): void {
    
    this.AfficherAllUtilisateur();
    this.UtilisateurAAjouter=new Utilisateur();
  }

  AfficherAllUtilisateur(){
    this.uservice.afficherTousLesUtilisateurs().subscribe(
      response => {
        this.listeUtilisateur=response;
      }
    );

    
  }

  ajouterUtilisateur(){

    this.uservice.ajouterUnUtilisateur(this.UtilisateurAAjouter).subscribe(
      response=>{
        console.log(response);
        this.AfficherAllUtilisateur();
      },
      error=>{
        console.log("Ne peut pas ajouter d'utilisateur");
      }
    );
  }

  modifierUtilisateur(u:Utilisateur){

    this.UtilisateurAAjouter=u;
  }

  supprimerUtilisateur(id:number){
    this.uservice.deleteUtilisateur(id).subscribe(
      response=>{
        console.log("utilisateur supprimé");
        this.AfficherAllUtilisateur();
      },
      error=>{
        console.log("utilisateur pas supprimé");
      }
    )
  }
  
}
