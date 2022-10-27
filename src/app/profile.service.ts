import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public http : HttpClient,) {
  }

  doUserRegisterProfileBasic(data:any)
  {
    return this.http.post<string>("http://localhost:3000/register", data);
  }
}
