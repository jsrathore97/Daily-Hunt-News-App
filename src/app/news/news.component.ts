import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    
  showService :any = [];

  constructor( private myservice : NewsServiceService , private _router : Router) {
        this.myservice.getData()
        .subscribe((data)=> this.displayData(data))
   }

   displayData(data){
     this.showService=data;
   }

  
   newsDetailsPage(data){
    this._router.navigate(['details',data]);
    console.log(data);
   }


   ngOnInit() {
  }
 
 
  



}
