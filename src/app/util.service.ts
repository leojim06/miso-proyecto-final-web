import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesion } from './models/lesion.model';
import { Hassle } from './models/hassle.model';
import { Sport } from './models/sport-model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(public http: HttpClient,) {

  }

  /*
  Listar las molestias
  */
  doListHassle() {
    return this.http.get<Hassle[]>("http://35.244.246.183/molestias/");
  }

  /*
 Listar lesiones
  */
  doListLesion() {
    return this.http.get<Lesion[]>("http://35.244.246.183/lesiones/");
  }

    /*
 Listar Deportes
  */
 doListSport()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/deportes/");
 }

    /*
 Listar Niveles
  */
 doListNivel()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/niveles-plan/");
 }

     /*
 Listar Suscripciones
  */
 doListSubscripcion()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/suscripciones/");
 }

/*
 Listar Complementos
 */
doListComplementsPlan()
{
  return this.http.get<Sport[]>("http://35.244.246.183/complementos-plan/");
}

/*
 Listar Categorias
 */
 doListCategorias()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/categorias-socio/");
 }


 /*
 Listar Categorias
 */
 doListDieta()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/tipos-dietas/");
 }

  /*
 Listar Categorias
 */
 doListAlimentos()
 {
   return this.http.get<Sport[]>("http://35.244.246.183/alimentos/");
 }

 }
