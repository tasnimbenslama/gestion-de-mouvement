import { Component } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { HttpClient } from '@angular/common/http';
import { Group } from '../Models/group';
import { FournisseurService } from '../services/fournisseur.service';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  fournisseur: Fournisseur = new Fournisseur(0,"","")  
  message:any;
  ajout=false;
  idGroupe!:number;
  groupe: Group = new Group(0,"")  

  constructor(private http: HttpClient,private service:FournisseurService) { }

  
  public registerNow(){
let resp=this.service.doRegistration(this.fournisseur);
resp.subscribe((data)=>this.message=data);
  }


  ///////////////


 
  groupes:any;


  ngOnInit(): void {
    this.service.getAllGroupFournisseurs().subscribe(data => {
      this.groupes = data;
    });
  }


  addAndAssignToFournisseurGroup(fournisseur:Fournisseur,idGroupe: number): void {
    this.service.addFournisseurAndAssignToGroup(this.fournisseur,idGroupe).subscribe(
      response => {
        const message =('SUCCESS ');
        alert(message);
      },
      error => {
      }
    );
  }
}