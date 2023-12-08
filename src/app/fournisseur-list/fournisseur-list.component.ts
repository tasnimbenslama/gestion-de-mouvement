
import { Component } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent {
  constructor(private http: HttpClient,private service:FournisseurService, private router : Router) { }
fournisseurs :any
  ngOnInit() {
    let resp=this.service. retrieveProject();
    resp.subscribe((data)=>this.fournisseurs=data);
  }
  edit(item:any){
    console.log(item)
    var url = 'edit-Fournisseur/'+item.idFournisseur
    this.router.navigateByUrl(url)
  }

}

