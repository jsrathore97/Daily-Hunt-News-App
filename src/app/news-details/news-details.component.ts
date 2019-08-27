import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  todaydate = new Date(); //Date Pipe


data:any;
  constructor(private _router : ActivatedRoute , private  router : Router ,private spninerService : Ng4LoadingSpinnerService) { 

    _router.params.subscribe(params => {
      this.data = params; 
      
      
      });
  }

  backToNews(){
     this.router.navigate(['news']);

     this.spninerService.show();
    setTimeout(()=>this.spninerService.hide(),2000)
  }



  ngOnInit() {
  }

}
