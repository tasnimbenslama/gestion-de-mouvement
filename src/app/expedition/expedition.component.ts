import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ExpeditionService } from '../services/expedition.service';
class Exp {
  bl : any
  code_mvt : any 
  quantite : any
  
}
@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.css']
})
export class ExpeditionComponent implements OnInit {

  focus: any;
  focus1: any;
  fournisseurs : any
  bacCheked : boolean = false
  palCheked : boolean = false
  rec = new Exp()
  select : any
  idArticle : any
  isPlastique : boolean
  isBois : boolean
  constructor(private service : ExpeditionService) { }

  ngOnInit(): void {
    this.getAllFournisseur()
  }

 

  getAllFournisseur(){
    this.service.getAllFournisseur().subscribe(res=>{
      console.log(res)
      this.fournisseurs = res
    })
  }

  save1(){
    console.log(this.select);
    
    console.log(this.rec)
    this.service.saveRecepetion(this.idArticle , this.select , this.rec).subscribe(res=>{
      console.log(res)
      Swal.fire(
        'Good job!',
        'success'
      ).then(()=>{
        window.location.reload()
      })
    })
  }
  noSelection = true;

  bacsChange(event: any) {
    if (event.target.checked) {
      console.log('Checkbox is checked' , event.target.checked);
      this.bacCheked = true
      // Do something when the checkbox is checked
    } else {

      console.log('Checkbox is unchecked');
      this.bacCheked = false
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


