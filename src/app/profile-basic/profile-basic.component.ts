import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PackService } from '../pack.service';

@Component({
  selector: 'profile-basic',
  templateUrl: './profile-basic.component.html',
  styleUrls: ['./profile-basic.component.css']
})
export class ProfileBasicComponent implements OnInit {
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

  constructor(
    public userSer: UsersService,
    public activeRoute: ActivatedRoute,
    public pac: PackService,
    public rooter:Router
  ) {}

  ngOnInit(): void {
    console.log(this.useriid);

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
}


