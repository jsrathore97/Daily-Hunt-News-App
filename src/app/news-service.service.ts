import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  /* News API from NEWS.org */
  private url : string ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-04&sortBy=publishedAt&apiKey=07ce87c35a70410f998fb7911766dea8"; 
  constructor(private http : HttpClient) {  }

     getData(){
       return this.http.get(this.url);
      }
}
