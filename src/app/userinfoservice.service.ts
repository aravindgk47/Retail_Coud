import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserinfoserviceService {
  ud1: Object;
 constructor(private HttpClient:HttpClient) { }
 
  getApiData() {
    let url="https://keralastats.coronasafe.live/latest.json"

    return this.HttpClient.get(url)



      
    };  
}
