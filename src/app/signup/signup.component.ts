import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  summaries:any;
  constructor( private _router : Router) {
    this.summaries=['Political','Sports','Economics','Mythology','Science and Technology','Teaching and Education','Society and Culture '];
     }

   backToLogin(){
       this._router.navigate(['']);
  }


  filterForeCasts(value){
     alert(value);
  }

  ngOnInit() {
  }


log(x){
   console.log(x);
}

submit(f){
  console.log(f);
}

}
