import { Component, OnInit } from '@angular/core';
import { ReceptionService } from '../services/reception.service';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-rec',
  templateUrl: './liste-rec.component.html',
  styleUrls: ['./liste-rec.component.css']
})
export class ListeRecComponent implements OnInit {
  recption: any
  constructor(private receptionService: ReceptionService, private http: HttpClient , private router : Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.receptionService.getAllReception().subscribe(res => {
      console.log(res)
      this.recption = res
    })
  }
  edit(item:any){
    console.log(item)
    var url = 'edit-reception/'+item.idMvt
    this.router.navigateByUrl(url)
  }

  pdf() {
    var mediaType = 'application/pdf';
    console.log('e')
    this.http.post("http://localhost:8087/Stage/Api/GeneratePdf", {location: "report.pdf"}, { responseType: 'blob' }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        },
        e => { throwError(e); }
    );
  
  }

}


