import { DisplayEvent } from './../../model/addEvent';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  displayEvent: DisplayEvent[];

  constructor(public addEventService:EventService) { }

  ngOnInit() {
    
    this.addEventService.getEvent().subscribe( items=> {
      console.log(items);
      this.displayEvent=[];
    items.forEach(element=>{
  
      this.displayEvent.push( element as DisplayEvent );

    }); 
   });

  }

}
