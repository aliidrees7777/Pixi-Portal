import { LiteraryService } from './../services/literary.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { AdminenvironmentComponent } from './adminview/adminenvironment/adminenvironment.component';
import { AdminliteraryComponent } from './adminview/adminliterary/adminliterary.component';
import { AdminsportsComponent } from './adminview/adminsports/adminsports.component';
import { RouterModule } from '@angular/router';
import { TryComponent } from './try/try.component';
import { EventService } from '../services/event.service';
import { SportsService } from '../services/sports.service';


@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    


  ],
  declarations: [
    AdminheaderComponent,
    AdminfooterComponent, 
    AdminhomeComponent, 
    AdminenvironmentComponent, 
    AdminliteraryComponent, 
    AdminsportsComponent,     
    TryComponent
  ],

  exports:[
    AdminheaderComponent,
    AdminfooterComponent,
    AdminhomeComponent,
    AdminenvironmentComponent,
    AdminliteraryComponent,
    AdminsportsComponent,
    TryComponent
     

  ], 

  providers:[
    LiteraryService,
    EventService,
    SportsService

  ]

})
export class AdminModule { }
 