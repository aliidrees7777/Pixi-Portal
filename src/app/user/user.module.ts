import { AdminenvironmentComponent } from './../admin/adminview/adminenvironment/adminenvironment.component';
import { AdminModule } from './../admin/admin.module';
import { AdminhomeComponent } from './../admin/adminhome/adminhome.component';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from './../services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EnvironmentComponent } from './views/environment/environment.component';
import { SportsComponent } from './views/sports/sports.component';
import { LiteraryComponent } from './views/literary/literary.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ContactusComponent } from './views/contactus/contactus.component';
import { GalleryComponent } from './views/gallery/gallery.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'pixiportal'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AdminModule,
    
    RouterModule.forRoot([
      { path: '', component: UserhomeComponent },     
      { path: 'environment', component: EnvironmentComponent },
      { path: 'acm', component: LiteraryComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'contact', component: ContactusComponent },
      
      { path: 'gallery', component: GalleryComponent },
      { path: 'admin', component: AdminhomeComponent }
      
      

  
    ])
  ],
  declarations: [
     HeaderComponent,
     FooterComponent, 
     UserhomeComponent, 
     EnvironmentComponent, 
     SportsComponent, 
     LiteraryComponent, 
     ContactusComponent, GalleryComponent
    ],

    exports:[
      HeaderComponent,
      FooterComponent,
      UserhomeComponent,
      EnvironmentComponent,
      SportsComponent,
      LiteraryComponent,
      ContactusComponent,
      GalleryComponent

    ], 

    providers:[
      AuthService,
      UserService
  
    ]
  
})
export class UserModule { }
