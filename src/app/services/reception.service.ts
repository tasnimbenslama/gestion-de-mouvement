import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private http : HttpClient) { }

  getAllFournisseur(){
    return this.http.get('http://localhost:8087/Stage/fournisseur/GetAll')
  }

  saveRecepetion(idArticle , idFour , data){
    return this.http.post('http://localhost:8087/Stage/Reception/AjoutMouvement/'+idArticle + '/'+idFour , data)

  }

  editRecepetion(id  , data){
    return this.http.put('http://localhost:8087/Stage/Reception/modifierMouvement/'+id , data)

  }

  getAllReception(){
    return this.http.get('http://localhost:8087/Stage/Reception/mvt/all')
  }
  getByidReception(id : any){
    return this.http.get('http://localhost:8087/Stage/Reception/GetById/'+id)
  }
}
