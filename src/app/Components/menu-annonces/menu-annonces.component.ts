import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/Service/annonce.service';
import { CategorieService } from 'src/app/Service/categorie.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Annonce } from 'src/app/models/annonce';
import { Categorie } from 'src/app/models/categorie';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-menu-annonces',
  templateUrl: './menu-annonces.component.html',
  styleUrls: ['./menu-annonces.component.css']
})

export class MenuAnnoncesComponent implements OnInit{

  listeAnnonce!:Annonce[];
  AnnonceAAjouter!:Annonce;
  listeCategorie!:Categorie[];


  constructor(private aservice:AnnonceService,private cservice:CategorieService, private router: Router){
  }
  ngOnInit(): void {
    this.AfficherAnnonces();
    this.AnnonceAAjouter = new Annonce();
    this.AfficherCategorie();
  }
  AfficherAnnonces(){
    this.aservice.afficherToutesLesAnnonces().subscribe(
      response =>{
        this.listeAnnonce=response;
        for(let i = 0;i<this.listeAnnonce.length;i++){
          
            this.cservice.CategorieParIdAnnonce(this.listeAnnonce[i].id).subscribe(
              response =>{
                this.listeAnnonce[i].categorie=response;
              }
            );
          }
        }
      )
    }
  AfficherCategorie(){
    this.cservice.AfficherListCategorie().subscribe(
      response=>{
        this.listeCategorie=response;
        console.log(this.listeCategorie);
        this.AfficherAnnonces();
      }
    )
  }

  ajouterAnnonce(){
    this.aservice.ajoutAnnonce(this.AnnonceAAjouter).subscribe(
      
      response =>{
        console.log("ajouter Annonce" +response);
        this.AfficherAnnonces();
      },
      error=>{
        console.log("Annonce pas ajoutée");
      }
    )
  }
}
