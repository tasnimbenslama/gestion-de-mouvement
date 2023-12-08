import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ReceptionComponent } from './reception/reception.component';
import { ListeRecComponent } from './liste-rec/liste-rec.component';
import { EditRecComponent } from './edit-rec/edit-rec.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { ExpeditionComponent } from './expedition/expedition.component';
import { ExpansionCase } from '@angular/compiler';
import { ExpeditionListComponent } from './expedition-list/expedition-list.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'register', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reception', component: ReceptionComponent },
  { path: 'list-reception', component: ListeRecComponent },
  { path: 'list-expedition', component: ExpeditionListComponent},
  { path: 'expedition', component: ExpeditionComponent },
  { path: 'edit-reception/:id', component: EditRecComponent },
  { path: 'edit-Fournisseur/:id', component: EditFournisseurComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'fournisseurList', component: FournisseurListComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
