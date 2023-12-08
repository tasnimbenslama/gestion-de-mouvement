

import { Component, OnInit } from '@angular/core';
import { ReceptionService } from '../services/reception.service';
import Swal from 'sweetalert2';
import { ActivatedRoute ,Router} from '@angular/router';
class Rec {
  bl : any
  cmd : any
  code_mvt : any 
  quantite : any
  
}
@Component({
  selector: 'app-edit-rec',
  templateUrl: './edit-rec.component.html',
  styleUrls: ['./edit-rec.component.css']
})
export class EditRecComponent implements OnInit {
  focus: any;
  focus1: any;
  fournisseurs : any
  bagCheked : boolean = false
  palCheked : boolean = false
  rec = new Rec()
  select : any
  response : any
  idArticle : any
  isPlastique : boolean
  isBois : boolean
  id = this.route.snapshot.params['id']
  constructor(private receptionService : ReceptionService , private route : ActivatedRoute
    ) { 
    this.receptionService.getByidReception(this.id).subscribe(res=>{
      console.log(res)
      this.response = res
      this.rec = this.response
    })
  }

  ngOnInit(): void {
    this.getAllFournisseur()
  }

  edit(){
    this.receptionService.editRecepetion(this.id , this.rec).subscribe(res=>{
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
  }

 

  getAllFournisseur(){
    this.receptionService.getAllFournisseur().subscribe(res=>{
      console.log(res)
      this.fournisseurs = res
    })
  }



  begChange(event: any) {
    if (event.target.checked) {
      console.log('Checkbox is checked' , event.target.checked);
      this.bagCheked = true
      // Do something when the checkbox is checked
    } else {
      console.log('Checkbox is unchecked');
      this.bagCheked = false
      // Do something when the checkbox is unchecked
    }
    this.idArticle = 5
  }
  palChange(event: any) {
    if (event.target.checked) {
      console.log('Checkbox is checked' , event.target.checked);
      this.palCheked = true
      // Do something when the checkbox is checked
    } else {
      console.log('Checkbox is unchecked');
      this.palCheked = false
      // Do something when the checkbox is unchecked
    }
  }

  plasticChange(event: any){
    if (event.target.checked){
      this.isPlastique = true
      console.log("isPlastique")
    }else{
      this.isPlastique = false
      console.log("!isPlastique")
    }
  }

  boisChange(event: any){
    if (event.target.checked){
      this.isBois = true
      console.log("isBois")
    }else{
      this.isBois = false
      console.log("!isBois")
    }
  }
  centChange(event: any){
    if (event.target.checked){
      if(this.isPlastique){
        this.idArticle = 1
      }
      if(this.isBois){
        this.idArticle = 3
      }
    }else{
      
    }
  }

  quatrvinChange(event: any){
    if (event.target.checked){
      if(this.isPlastique){
        this.idArticle = 2
      }
      if(this.isBois){
        this.idArticle = 4
      }
    }else{
      
    }
  }

}

