import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'https://colorlib-15ff0.firebaseio.com/itemData.json';

  constructor(private http: HttpClient) { }

  saveDetails(itemData: any[]) { 
    return this.http.put(this.url, itemData);
  }
  fetchData() {
    return this.http.get(this.url);
  }

  


}
