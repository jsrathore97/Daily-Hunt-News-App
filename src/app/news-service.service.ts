import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { Http } from '@angular/http';
>>>>>>> 55c32ab9f16b603faad0320ddba89de239a1c7c7


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  /* News API from NEWS.org */
<<<<<<< HEAD
  private url : string ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-04&sortBy=publishedAt&apiKey=07ce87c35a70410f998fb7911766dea8"; 
  constructor(private http : HttpClient) {  }

     getData(){
       return this.http.get(this.url);
      }
=======
  private url : string ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-27&sortBy=publishedAt&apiKey=07ce87c35a70410f998fb7911766dea8"; 
  constructor(private http : Http) {  }

     getData(){
       return this.http.get(this.url);
    

   }
>>>>>>> 55c32ab9f16b603faad0320ddba89de239a1c7c7
}
