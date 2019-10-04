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

<<<<<<< HEAD
  constructor( private myservice : NewsServiceService , private _router : Router) {
        this.myservice.getData()
        .subscribe((data)=> this.displayData(data))
   }

   displayData(data){
     this.showService=data;
=======
  constructor( myservice : NewsServiceService , private _router : Router) {
        myservice.getData().subscribe(res=>{
          this.showService =res.json();
          console.log(this.showService);
         // console.log(JSON.parse(this.showService));
        })


>>>>>>> 55c32ab9f16b603faad0320ddba89de239a1c7c7
   }

  
   newsDetailsPage(data){
    this._router.navigate(['details',data]);
    console.log(data);
   }


   ngOnInit() {
  }
 
 
  



}
