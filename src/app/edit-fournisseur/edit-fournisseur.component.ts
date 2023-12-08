import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { HttpClient } from '@angular/common/http';
import { FournisseurService } from '../services/fournisseur.service';
import Swal from 'sweetalert2';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit  {
  fournisseur: Fournisseur = new Fournisseur(0,"","")  
  response :any;
  id = this.route.snapshot.params['id']

  constructor(private http: HttpClient,private service:FournisseurService,private route : ActivatedRoute,    private router: Router) {
    this.service.getByidReception(this.id).subscribe(res=>{
      this.response = res
      this.fournisseur = this.response
    })
   }

  ngOnInit(): void {
  }

    
  
  edit(){
    this.service.editRecepetion(this.id , this.fournisseur).subscribe(res=>{
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      ).then(()=>{
        window.location.reload()
      })
    },err=>{
      if(err.status == 200){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          window.location.reload()
        })
      }
    })
            this.router.navigate(['/fournisseurList']);

  }


}