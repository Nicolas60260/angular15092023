import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './Components/utilisateur/utilisateur.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { PageAccueilComponent } from './Components/page-accueil/page-accueil.component';
import { MenuAnnoncesComponent } from './Components/menu-annonces/menu-annonces.component';


const routes: Routes = [
  {path:'GestionUtilisateurs',component:UtilisateurComponent},
  {path:'authentification',component:AuthentificationComponent},
  {path:'Accueil',component:PageAccueilComponent},
  {path:'Annonces',component:MenuAnnoncesComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
