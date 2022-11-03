import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { PackService } from '../pack.service';
import { UtilService } from '../util.service';
import { Lesion } from '../models/lesion.model';
import { Hassle } from '../models/hassle.model';
import { Sport } from '../models/sport-model';
import { HistorySport } from '../models/history-sport.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile-sport',
  templateUrl: './profile-sport.component.html',
  styleUrls: ['./profile-sport.component.css']
})
export class ProfileSportComponent implements OnInit {
  msg: string;
  uuseremailavail=false;
  date = new Date();

  userdata: {
    _id: number;
    Fname: string;
    lname: string;
    uemail: string;
    userage: Number;
    usergender: Number;
    gender: String;
    userpass: string;
    userphone: number;
    level: string;
    pack: string;
    istrain: boolean;
    isdietplan: boolean;
    isbath: boolean;
    date: string;
  };

  useriid: any = localStorage.getItem('loggeduser');
  hasslee: Hassle[];
  lesion: Lesion[];
  sports: Sport[];
  model   = {id: '1'};
  optionsPlan: any[] = [{id: true, nombre: 'Sí'}, {id: false, nombre: 'No'}];
  favoriteSeason: string;
  historysport:  Array<HistorySport> = [];
  idDeporteSeleccionado: number;
  edad: number;
  anio: number;
  horaSemana: number;
  ciudad: string;
  arrayLesion: Array<any> = [];
  category: any= []


  constructor(
    public userSer: UsersService,
    public activeRoute: ActivatedRoute,
    public pac: PackService,
    public rooter:Router,
    public utilServ: UtilService
  ) {}

  countries = [{
    id: 1, name: 'France', cities: ['Paris', 'Marseille', 'Nice']
  },
  {
    id: 2, name: 'Germany', cities: ['Hamburg', 'Berlin', 'Munich']
  },
  {
    id: 3, name: 'Italy', cities: ['Roma', 'Milan', 'Napoli']
  },
  ];

  ngOnInit(): void {
    console.log(this.useriid);

    /*
    Servicio de molestias
    */
    this.utilServ.doListHassle().subscribe(
      (data: Hassle[]) => {
        console.log('molestias', data)
        this.hasslee = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    /*
    Servicio de lesiones
    */
    this.utilServ.doListLesion().subscribe(
      (data: Lesion[]) => {
        console.log('lesiones', data)
        this.lesion = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

       /*
    Servicio de deportes
    */
    this.utilServ.doListSport().subscribe(
      (data: Sport[]) => {
        console.log('deportes', data)
        this.sports = data;
      },
      (error: any) => {
        console.log(error);
      }
    );


    this.userSer.getloggedUserData(this.useriid).subscribe(
      (data: any[]) => {
        console.log(data);
        this.userdata = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onChangeSport(deviceValue:any) {
    this.idDeporteSeleccionado = deviceValue.value;
    console.log('deporteseleccionado', deviceValue.value);
  }

  saveHistorySport(){
    console.log('sports33', this.sports);
    console.log('deporteseleccionadwwo', this.idDeporteSeleccionado);
    console.log('sports', );
    this.historysport.push({idDeporte: this.idDeporteSeleccionado,
                            edadInicioPractica: this.edad,
                          aniosPractica: this.anio,
                        dedicacionHorasSemana: this.horaSemana,
                      ciudad: this.ciudad,
                    practicadoActualmente: JSON.parse( this.favoriteSeason),
                  deporte: this.sports?.filter(x => x.id == this.idDeporteSeleccionado)[0].descripcion,
                  id: this.historysport.length + 1});
    console.log('datostabla', this.historysport);
  }

  deleteHistorySport(id: number){
    console.log('position', id);
    this.historysport = this.historysport.filter(x => x.id !== id);
    // this.historysport = this.historysport.splice(id,1);
     console.log('positionSports', this.historysport);
  }


  checkChangeLesion(id: number){

    if (this.category[id]){  
      this.category[id] = !this.category[id];
      this.arrayLesion = this.arrayLesion.splice(id,1);
      console.log('sdss', this.arrayLesion)
    }
    else{
      this.category[id] = true;
      this.arrayLesion.push(id);
    }
 
    console.log('arrayLesion', this.arrayLesion);
  }


  userRegistration(form:NgForm)
  {
    console.log("User Registered");
    form.value.date=this.date;
    console.log(form.value);
    this.rooter.navigateByUrl("/login")

    this.userSer.doUserRegistration(form.value).subscribe((data:string)=>{

      console.log(data);

      this.msg = data;

      form.reset();

    }, (error:any)=>{

      console.log(error);

      this.msg = "Something Went Wrong!!";

    });

  }

}
