import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../Models/fournisseur';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http : HttpClient) { }
  private baseUrl = 'http://localhost:8087';


  public doRegistration(fournisseur: Fournisseur){
    return this.http.post('http://localhost:8087/Stage/fournisseur/Add',fournisseur);
  }
   retrieveProject(): Observable<Fournisseur> {
    return this.http.get<Fournisseur>('http://localhost:8087/Stage/fournisseur/GetAll');
  }

  assignToFournisseur(fournisseur: any, idGroupe: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/Stage/fournisseur/fournisseurGroup/${idGroupe}`, fournisseur);
  }

  getAllGroupFournisseurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Stage/fournisseur/All/Getgroup`); // Adjust the URL to match your API
  }
  addFournisseurAndAssignToGroup(fournisseur: Fournisseur, idGroupe: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8087/Stage/fournisseur/fournisseurGroup/${idGroupe}`, fournisseur);
  }
  editRecepetion(id  , fournisseur:Fournisseur){
    return this.http.put('http://localhost:8087/Stage/fournisseur/UpdateFournisseur/'+id , fournisseur)

  }
  getByidReception(id : any){
    return this.http.get('http://localhost:8087/Stage/fournisseur/GetById/'+id)
  }

}
