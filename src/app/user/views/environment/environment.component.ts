import { AddEvent } from 'src/app/model/addEvent';
import { EventService } from './../../../services/event.service';
import { DisplayEvent } from './../../../model/addEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {
  
  displayEvent: DisplayEvent[];
  editState: boolean = false;
  itemToEdit: AddEvent;
  show_dialog : boolean = false;
  show_blog : boolean = true;
  button_name : any = 'View Gallery';

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


  editItem(event, item : AddEvent){
    this.editState=true;
    this.itemToEdit=item;
    
    this.show_dialog = !this.show_dialog;
    this.show_blog = !this.show_blog;
  } 

  showEvents(event) {
    this.show_blog = true;
    this.show_dialog = false;

    // CHANGE THE TEXT OF THE BUTTON.
    /* if(this.show_dialog) 
      this.button_name = "Close Gallery";
    else
      this.button_name = "View Gallery"; */
  }


}
