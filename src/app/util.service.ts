import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesion } from './models/lesion.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(public http : HttpClient,) {

  }

  doListLesion()
  {
    return this.http.get<Lesion[]>("http://localhost:3000/profile/");
  }


}
