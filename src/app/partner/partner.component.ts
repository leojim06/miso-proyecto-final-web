import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Parther } from '../models/parther.model';
import { Sport } from '../models/sport-model';
import { UsersService } from '../users.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  msg : string;
  uuseremailavail=false;
  date = new Date();
  categorias: Sport[];
  sinSeleccionar: any = 0;
  sportSelected: any;
  idDeporteSeleccionado: number;
  sports: Sport[];
  parther: Parther = {razonSocial: null, categoriaSocio: null, email: null, password: null};

  constructor(public userSer : UsersService, public rooter:Router,  private utilService: UtilService) { 
    
  }

  ngOnInit(): void {
    this.consultarCategorias();
  }

  userRegistration(form:NgForm)
  {
   
    form.value.date=this.date;
    console.log(form.value);
    this.rooter.navigateByUrl("/welcome-partner")

    this.parther.razonSocial = form.value.nombres;
    this.parther.categoriaSocio = this.idDeporteSeleccionado;
    this.parther.email = form.value.email;
    this.parther.password = form.value.password;
    console.log("User Registered", this.parther);
    this.userSer.doPartherRegistration(this.parther).subscribe((data:string)=>{
      console.log(data);
      this.msg = data;

      form.reset();
    }, (error:any)=>{
      console.log(error);
      this.msg = "Something Went Wrong!!";
    });

  }
  uuemailcheck(uemail:string)
  {
    this.userSer.uuemailcheckAvail(uemail).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0)
      {
        this.msg=""
        this.uuseremailavail= true;
      }
      else{
        this.msg="El correo electrónico ya se encuentra registrado ";
        this.uuseremailavail= false;
      }

    },(error:any)=>{
      console.log(error);
      this.msg="Algo salió mal";
    })
  }


  consultarCategorias() {
    this.utilService.doListCategorias().subscribe(
      (data: Sport[]) => {
        console.log('consultasComplements', data)
        this.categorias = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onChangeSport(deviceValue: any) {
    this.idDeporteSeleccionado = deviceValue.value;
    console.log('deporteseleccionado', deviceValue.value);
  }


}
