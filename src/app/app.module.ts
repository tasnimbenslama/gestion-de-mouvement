import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ReceptionComponent } from './reception/reception.component';
import { ListeRecComponent } from './liste-rec/liste-rec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditRecComponent } from './edit-rec/edit-rec.component';
import { ExpeditionComponent } from './expedition/expedition.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FournisseurListComponent } from './fournisseur-list/fournisseur-list.component';
import { ExpeditionListComponent } from './expedition-list/expedition-list.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ReceptionComponent,
    ListeRecComponent,
    EditRecComponent,
    ExpeditionComponent,
    FournisseurComponent,
    FournisseurListComponent,
    ExpeditionListComponent,
    EditFournisseurComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
