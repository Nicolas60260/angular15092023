import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './Components/utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { PageAccueilComponent } from './Components/page-accueil/page-accueil.component';
import { HeaderComponent } from './Components/header/header.component';
import { MenuAnnoncesComponent } from './Components/menu-annonces/menu-annonces.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    AuthentificationComponent,
    PageAccueilComponent,
    HeaderComponent,
    MenuAnnoncesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
