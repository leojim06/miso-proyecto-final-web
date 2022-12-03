import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastPackage } from 'ngx-toastr';
import { Package } from '../models/package.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isPackbuy = true;
  code: string = '452dfg';
  pay = 280000;
  userdataa: {
    _id: number;
    Fname: string;
    lname: string;
    uemail: string;
    userage: Number;
    usergender: Number;
    gender: String;
    userpass: string;
    userphone: number;
  };
  codemsg: string;
  couponcode: string = '';
  packn: string;
  isdiet = false;
  msg: string;
  userdata: any = localStorage.getItem('loggeduser');
  date = new Date();
  offer: string;
  appliedmsg: string;
  taxy: number;
  istax: boolean;
  isnottax: boolean;
  val: string;
  coup: string;
  listComplements: Array<any> = [];

  packname = localStorage.getItem('packna');
  packdesc = localStorage.getItem('packds');
  idDeportista: number;
  package: Package = { 
    idMedioPago: null,
    idTipoSuscripcion: null,
    idNivel: null,
    complementos: null
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public pac: PackService,
    public userSer: UsersService,
    public rooter: Router
  ) {
    this.packn = pac.packname;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param: Params) => {
      console.log(param.userid);
    });

    this.idDeportista = parseInt(localStorage.getItem('loggeduser'));

  }

  bath(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 500;
      } else {
        this.pay += 300000;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 500;
      } else {
        this.pay -= 300000;
      }
    }
  }
  train(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 1000;
      } else {
        this.pay += 200000;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 1000;
      } else {
        this.pay -= 200000;
      }
    }
  }
  diet(event: any) {
    if (event.target.checked == true)
      if (this.couponcode == this.code) {
        this.pay += 250;
      } else {
        this.pay += 150000;
      }
    else {
      if (this.couponcode == this.code) {
        this.pay -= 250;
      } else {
        this.pay -= 150000;
      }
    }
  }
  coupon(event: any) {
    if (this.couponcode == this.code) {
      event.target.disabled = true;
      this.pay *= 0.5;
      this.coup = 'Applied';
      this.appliedmsg = 'Coupon Applied';
      this.codemsg = '50%';
    } else {
      this.codemsg = 'Please Enter valid Code';
    }
  }
  iscoupon() {
    if (this.couponcode == this.code) {
      return true;
    } else {
      return false;
    }
  }

  packCb(form: NgForm) {

    console.log('Package Registered', form.value);
    console.log(form.value);
    var stringToConvert = localStorage.getItem('loggeduser');
    var numberValue = Number(stringToConvert);
    console.log(numberValue);
    form.value._id = numberValue;
    form.value.paid = this.pay;
    form.value.coupon = this.coup;
    form.value.date = this.date;
    form.value.pack = this.packn;

    if(this.packn == 'Plan Intermedio'){
      this.package.idTipoSuscripcion = 2;
    }else if (this.packn == 'Plan Gratis'){
      this.package.idTipoSuscripcion = 1;
    }else if  (this.packn == 'Plan Premium'){
      this.package.idTipoSuscripcion = 3;
    }

    if(form.value.level == 'Beginner'){
      this.package.idNivel = 1;
    }else if(form.value.level == 'Intermediate'){
      this.package.idNivel = 2;
    }else if(form.value.level == 'Advanced'){
      this.package.idNivel = 3;
    }

    
    if(form.value.payment == 'Gpay'){
      this.package.idMedioPago = 1;
    }else if(form.value.level == 'Upi'){
      this.package.idMedioPago = 2;
    }

    if(form.value.isdietplan == true){
      this.listComplements.push(1);
    }
    if(form.value.istrain == true){
      this.listComplements.push(2);
    }
    if(form.value.isbath == true){
      this.listComplements.push(3);
    }

    this.package.complementos = this.listComplements;

    this.userSer.addpackages(this.package, this.idDeportista).subscribe(
      (data: string) => {
        this.msg = data;
        form.reset();
      },
      (error: any) => {
        this.msg = 'something went wrong';
      }
    );
    this.rooter.navigateByUrl('/payment');
  }
}
