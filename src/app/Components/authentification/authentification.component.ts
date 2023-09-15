import { Component,OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Router } from '@angular/router';
import { AuthentificationResponse } from 'src/app/models/authentification-response';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent  implements OnInit {


    EnregistrementUser!:Utilisateur;
    authResponse!:AuthentificationResponse;
  
    constructor(private uservice:UtilisateurService,private router:Router)
   {
  
   }
  
   ngOnInit() : void{// méthode provenant de OnInit à redéfinir
    sessionStorage.removeItem("token");
    this.EnregistrementUser=new Utilisateur();
    
   }
  
   enregistrerUser(){
    
    this.uservice.CatchToken(this.EnregistrementUser).subscribe(
      
      response =>
      {
        console.log("auth ok")
        this.authResponse = response;
        console.log(this.authResponse);
        //sessionstorage
        sessionStorage.setItem('token', this.authResponse.jwt);
        //redirection pour afficher les personnes
        this.router.navigateByUrl(`GestionUtilisateurs`); // permet d'éviter la concaténation nommé diamand opérateur (pas des simples quotes, faire alt+gr+7 pour les générer)
      } ,
      error=>
      {
        
        console.log("mauvais identifiants")
      }
    )
  
  }
  
  }
