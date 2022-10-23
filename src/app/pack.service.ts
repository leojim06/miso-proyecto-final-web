import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  packname="";
  packdesc="";
  accountStatus="Inactive";
  calisThen="Plan Gratis";
  caliS="Inicia un plan de entrenamiento, participa en desafíos y gana fuerza. Corre, pedalea, camina, entrena, baila... ¡toda actividad cuenta! No importa lo lejos que estés de alcanzar tus objetivos: descubre lo mejor de ti con las app de SportApp.";
  gyM="Plan Intermedio";
  gymNa="Seleccione grupos musculares y cree su propio entrenamiento personalizado. Participa en desafíos y competencias amistosas para motivarte más. Entrena en cualquier lugar y en todas partes. Consigue los resultados que deseas gracias a planes de entrenamiento que se adaptan a tu nivel, diseñados por especialistas en fitness.";
  crossFi="Plan Premium";
  crossFitness="Registra tus entrenamientos y analiza las estadísticas. Únete a los desafíos para obtener más motivación y desafía tus límites. Comparta sus éxitos con una comunidad global y alcance sus metas paso a paso. ¿Te atreves? Descarga la SportApp y ponte en forma con éxito.";
  // kickBo="Kickboxing";
  // kickBoxing="Kickboxing is a group of stand-up combat sports based on kicking and punching, historically developed from karate mixed with boxing. Kickboxing is practiced for self-defence, general fitness, or as a contact sport."
  // sporT="Sports";
  // sporTs=" Sports fitness leads to better athletic performance, and persistent training will usually develop physical fitness. ... Ability of the endurance athlete to use oxygen is related to circulatory and respiratory capacity, but in sprints, weight lifting, and swimming.";
  // cardiO="Cardio is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process. Aerobic is defined as relating to, involving, or requiring free oxygen, and refers to the use of oxygen to adequately meet energy demands.";
  // card="Cardio";
  stbath=1000;
  pt=2000;
  dplan=500;
  name=localStorage.getItem("loggedusername");
  namee=localStorage.getItem("loggedusernamee");
  gender=localStorage.getItem("loggedusergen");
  age=localStorage.getItem("loggeduserage");


  constructor(public http:HttpClient,public rooter: Router) {
    console.log("service created");
  }
  calisBuy(){
    this.packname=this.calisThen;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.caliS;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
   }
  gymBuy(){
    this.packname=this.gyM;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.gymNa;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  crossBuy(){
    this.packname=this.crossFi;
    localStorage.setItem("packna", this.packname);
    this.packdesc=this.crossFitness;
    localStorage.setItem("packds",this.packdesc);
    this.rooter.navigateByUrl("/cart")
  }
  // kickBuy(){
  //   this.packname=this.kickBo;
  //   localStorage.setItem("packna", this.packname);
  //   this.packdesc=this.kickBoxing;
  //   localStorage.setItem("packds",this.packdesc);
  //   this.rooter.navigateByUrl("/cart")
  // }
  // cardioBuy(){
  //   this.packname=this.card;
  //   localStorage.setItem("packna", this.packname);
  //   this.packdesc=this.cardiO;
  //   localStorage.setItem("packds",this.packdesc);
  //   this.rooter.navigateByUrl("/cart")
  // }
  // sportsBuy(){
  //   this.packname=this.sporT;
  //   localStorage.setItem("packna", this.packname);
  //   this.packdesc=this.sporTs;
  //   localStorage.setItem("packds",this.packdesc);
  //   this.rooter.navigateByUrl("/cart")
  // }



}
