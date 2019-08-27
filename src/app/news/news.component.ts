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

  constructor( myservice : NewsServiceService , private _router : Router) {
        myservice.getData().subscribe(res=>{
          this.showService =res.json();
          console.log(this.showService);
         // console.log(JSON.parse(this.showService));
        })


   }

  
   newsDetailsPage(data){
    this._router.navigate(['details',data]);
    console.log(data);
   }


   ngOnInit() {
  }
 
 
  



}
