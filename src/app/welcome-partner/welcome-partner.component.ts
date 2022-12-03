import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackService } from '../pack.service';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from '../util.service';
import { Sport } from '../models/sport-model';

@Component({
  selector: 'app-welcome-partner',
  templateUrl: './welcome-partner.component.html',
  styleUrls: ['./welcome-partner.component.css']
})
export class WelcomePartnerComponent implements OnInit {
  msg: string;

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

  infoPackage: {
    idTipoSuscripcion: number;
    idNivel: number;
    complementos: Array<any>;
    idMedioPago: number;
  }

  useriid: any = localStorage.getItem('loggeduser');
  idDeportista: number;
  niveles: Sport[];
  subscripcion: Sport[];
  complements: Sport[];
  tiposusbscripcion: String;
  nivel: String;
  complementos: Sport[];
  dieta: String;
  entrenador: String;
  relajacion: String;

  constructor(
    public userSer: UsersService,
    public activeRoute: ActivatedRoute,
    public pac: PackService,
    public myRouter: Router,
    private toastr: ToastrService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    console.log(this.useriid);
    this.idDeportista = parseInt(localStorage.getItem('loggeduser'));
    this.consultasComplements();
    this.consultasNiveles();
    this.consultasTipoSubscripcion();


  }

  addbath() {
    if (this.userdata.isbath == true) {
      return true;
    } else {
      return false;
    }
  }
  addtrain() {
    if (this.userdata.istrain == true) {
      return true;
    } else {
      return false;
    }
  }
  adddiet() {
    if (this.userdata.isdietplan == true) {
      return true;
    } else {
      return false;
    }
  }

  consultarInfo(){
    this.userSer.getloggedUserData(this.idDeportista).subscribe(
      (data: any) => {
        console.log('getloggedUserData', this.subscripcion);
        this.infoPackage = data;

         this.tiposusbscripcion = this.subscripcion?.filter(x => x.id == data.idTipoSuscripcion)[0].descripcion;
         console.log('tiposusbscripcion', this.tiposusbscripcion);
         this.nivel = this.niveles?.filter(x => x.id == data.idNivel)[0].descripcion;

      for (let index = 0; index < data.complementos.length; index++) {
 
        this.dieta = data.complementos[0];
        this.entrenador = data.complementos[1];
        this.relajacion = data.complementos[2];
      }

      },
      (error: any) => {

        this.showWarning(
          'Su sesión ha caducado, por favor vuelva a iniciar sesión.'
        );
      }
    );
  }

  showError(error: string) {
    this.toastr.error(error, 'Error');
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, 'Error de autenticación');
  }

  showSuccess(mensaje: string) {
    this.toastr.success(
      `El album ${mensaje} fue editado`,
      'Edición exitosa'
    );
  }

  consultasNiveles() {
    this.utilService.doListNivel().subscribe(
      (data: Sport[]) => {
        console.log('consultasNiveles', data)
        this.niveles = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  consultasTipoSubscripcion() {
    this.utilService.doListSubscripcion().subscribe(
      (data: Sport[]) => {
        console.log('consultasTipoSubscripcion', data)
        this.subscripcion = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  consultasComplements() {
    this.utilService.doListComplementsPlan().subscribe(
      (data: Sport[]) => {
        console.log('consultasComplements', data)
        this.complements = data;
        this.consultarInfo();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



}


