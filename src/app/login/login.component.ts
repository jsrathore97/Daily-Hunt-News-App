import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
    email:string;
    password:any;

    constructor( private _router : Router , private spninerService : Ng4LoadingSpinnerService) {  }


  



  mybutton(email, password){
    

    if(this.email == "admin" && this.password == "admin"){
             
       this._router.navigate(['news']);


       console.log("news is wrk");

     
      
    }else
    {
      alert("Your Email and password Wrong ");
    }


    this.spninerService.show();
    setTimeout(()=>this.spninerService.hide(),4000)
    

    }

    signupPage(){
      this._router.navigate(['signup']);
    }

    ngOnInit() {}



}
