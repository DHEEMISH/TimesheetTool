import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  Url :string;   
  constructor(private httpClient: HttpClient) 
  { 
    this.Url = 'https://run.mocky.io/v3/9871d48c-e891-4407-9e36-d96b9a3dd684';

  }

  public getOverrideUsers(){
    return this.httpClient.get<any>(this.Url);
   // return this.httpClient.get('https://run.mocky.io/v3/9871d48c-e891-4407-9e36-d96b9a3dd684');
  }
}
