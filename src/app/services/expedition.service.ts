import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  constructor(private http : HttpClient) { }

  getAllFournisseur(){
    return this.http.get('http://localhost:8087/Stage/fournisseur/GetAll')
  }

  saveRecepetion(idArticle , idFour , data){
    return this.http.post('http://localhost:8087/Stage/Expedition/AjoutMouvement/'+idArticle + '/'+idFour , data)

  }

  getAllReception(){
    return this.http.get('http://localhost:8087/Stage/Expedition/mvt/all')
  }
  editRecepetion(id  , data){
    return this.http.put('http://localhost:8087/Stage/Expedition/modifierMouvement/'+id , data)

  }
  
  }
