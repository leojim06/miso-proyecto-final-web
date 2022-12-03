import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PackService } from '../pack.service';
import { ProfileBasic, ProfileBasicForm } from '../models/profile-basic.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'profile-basic',
  templateUrl: './profile-basic.component.html',
  styleUrls: ['./profile-basic.component.css']
})
export class ProfileBasicComponent implements OnInit {
  msg: string;
  uuseremailavail = false;
  date = new Date();

  userdata: {
    _id: number;
    fname: string;
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

  profileBasic: ProfileBasic = { nombres: null,
    apellidos: null, 
    paisNacimiento: null, 
    ciudadNacimiento: null,
    tipoIdentificacion: null, 
    numeroIdentificacion: null,
    genero: null,
    fechaNacimiento: null,
    peso: null,
    estatura: null,
    paisResidencia: null,
    ciudadResidencia: null};
  

  tipoIdentificacionSelected: any;
  idTypeIdenSeleccionado: number;
  sinSeleccionar: any = 0;
  tipoCountrySelected: any;
  idCountrySeleccionado: string;
  tipoCountryResidenciaSelected: any;
  idCountryResidenciaSeleccionado: string;


  useriid: any = localStorage.getItem('loggeduser');
  idDeportista: number;
  albumForm!: FormGroup;
  idDeportistaConsulta: number;

  constructor(
    public userSer: UsersService,
    public activeRoute: ActivatedRoute,
    public pac: PackService,
    public rooter: Router,
    private formBuilder: FormBuilder
  ) { 

    this.albumForm = this.formBuilder.group({
      fname: new FormControl('', [Validators.required]),
      flastname: new FormControl('', [Validators.required]),
      tipoIdentificacionSelected: new FormControl('', [Validators.required]),
      noIdentification: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      ciudadNacimiento: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      userage: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      fpeso: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      faltura: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      ciudadResidencia: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      tipoCountrySelected: new FormControl('', [Validators.required]),
      usergenderM: new FormControl('', [Validators.required]),
      usergenderF: new FormControl('', [Validators.required]),
      tipoCountryResidenciaSelected: new FormControl('', [Validators.required]),
    })
    
  }

  

  ngOnInit(): void {
    console.log(this.useriid);
    this.idDeportista = parseInt(localStorage.getItem('loggeduser'));

    this.userSer.doUserGetRegistrationProfile(this.useriid).subscribe(
      (data: any) => {
        console.log('doUserGetProfileSport', data);
        this.idDeportistaConsulta = data.idDeportista;
        console.log('idDeportistaConsulta', this.idDeportistaConsulta);
        if (data != undefined) {
            this.albumForm = this.formBuilder.group({
              fname: [
                data.nombres,
                [
                  Validators.required,
                  Validators.minLength(1),
                  Validators.maxLength(128),
                ],
              ],
              flastname: [
                data.apellidos,
                [
                  Validators.required,
                  Validators.minLength(1),
                  Validators.maxLength(128),
                ],
              ],
              tipoIdentificacionSelected: [
                data.tipoIdentificacion,
                [
                  Validators.required,
                ],
              ],
              noIdentification: [
                data.numeroIdentificacion,
                [
                  Validators.required,
                ],
              ],
              ciudadNacimiento: [
                data.ciudadNacimiento,
                [
                  Validators.required,
                ],
              ],
              userage: [
                data.fechaNacimiento,
                [
                  Validators.required,
                ],
              ],
              fpeso: [
                data.peso,
                [
                  Validators.required,
                ],
              ],
              faltura: [
                data.estatura,
                [
                  Validators.required,
                ],
              ],
              ciudadResidencia: [
                data.ciudadResidencia,
                [
                  Validators.required,
                ],
              ],
              tipoCountrySelected: [
                data.paisNacimiento,
                [
                  Validators.required,
                ],
              ],
              usergenderM: [
                data.genero,
                [
                  Validators.required,
                ],
              ],
              usergenderF: [
                data.genero,
                [
                  Validators.required,
                ],
              ],
              tipoCountryResidenciaSelected: [
                data.paisResidencia,
                [
                  Validators.required,
                ],
              ],
            });

        }
      },

    );

    // this.userSer.getloggedUserData(this.useriid).subscribe(
    //   (data: any[]) => {
    //     console.log(data);
    //     this.userdata = data[0];
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }

  userRegistration(form: ProfileBasicForm) {
    console.log("User Registered");
    console.log(form.fname);

    this.profileBasic.nombres = form.fname;
    this.profileBasic.apellidos = form.flastname;
    this.profileBasic.paisNacimiento = this.idCountrySeleccionado;
    this.profileBasic.ciudadNacimiento = form.ciudadNacimiento;
    this.profileBasic.tipoIdentificacion = this.idTypeIdenSeleccionado;
    this.profileBasic.numeroIdentificacion = form.noIdentification;
    this.profileBasic.genero = form.usergenderF == "" ? form.usergenderM : form.usergenderF;
    this.profileBasic.fechaNacimiento = form.userage;
    this.profileBasic.peso = form.fpeso;
    this.profileBasic.estatura = form.faltura;
    this.profileBasic.paisResidencia = this.idCountryResidenciaSeleccionado;
    this.profileBasic.ciudadResidencia = form.ciudadResidencia;

    console.log('this.profileBasic', form)
    this.userSer.doUserGetRegistrationProfile(this.idDeportista).subscribe((data: any) => {
      console.log(data);
      this.msg = data;
      console.log(data);
      // form.reset();
    }, (error: any) => {
      console.log(error);
      this.msg = "Something Went Wrong!!";
    });
  }

  onChangeTypeIdentification(deviceValue: any) {
    this.idTypeIdenSeleccionado = deviceValue.value;
    console.log('TypeIdentificationseleccionado', deviceValue.value);
  }

  onChangeCountry(deviceValue: any) {
    this.idCountrySeleccionado = deviceValue.value;
    console.log('CountrySeleccionado', deviceValue.value);
  }

  onChangeCountryResidencia(deviceValue: any) {
    this.idCountryResidenciaSeleccionado = deviceValue.value;
    console.log('CountrySeleccionado', deviceValue.value);
  }


  uuemailcheck(uemail: string) {
    this.userSer.uuemailcheckAvail(uemail).subscribe((data: any[]) => {
      console.log(data);
      if (data.length == 0) {
        this.msg = ""
        this.uuseremailavail = true;
      }
      else {
        this.msg = "El correo electrónico ya se encuentra registrado ";
        this.uuseremailavail = false;
      }

    }, (error: any) => {
      console.log(error);
      // this.msg = "Algo salió mal";
    })
  }
}


