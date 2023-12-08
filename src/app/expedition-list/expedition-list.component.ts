import { Component, OnInit } from '@angular/core';
import { ExpeditionService } from '../services/expedition.service';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expedition-list',
  templateUrl: './expedition-list.component.html',
  styleUrls: ['./expedition-list.component.css']
})
export class ExpeditionListComponent implements OnInit {

  recption: any
  constructor(private receptionService: ExpeditionService, private http: HttpClient , private router : Router) { }

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
    var url = 'edit-expedition/'+item.idMvt
    this.router.navigateByUrl(url)
  }

  pdf1() {
    var mediaType = 'application/pdf';
    console.log('e')
    this.http.post("http://localhost:8087/Stage/Api2/OpenPdf/", {location: "report.pdf"}, { responseType: 'blob' }).subscribe(
        (response) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'report.pdf');
        },
        e => { throwError(e); }
    );
  }
}
