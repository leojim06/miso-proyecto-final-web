import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events.model';
import { PackService } from '../pack.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {
  useriid:any= localStorage.getItem("loggeduser");
  events: Event[];
  
  constructor(public pac:PackService) {
    
  }
  
  ngOnInit(): void {console.log(this.useriid);
    this.getEvents();
  }

  getEvents(){
  this.pac.getEvents().subscribe(
    (data: any[]) => {
      console.log('getloggedUserData',data);
      this.events = data;
    },
    (error: any) => {
 
    }
  );
  }

}
