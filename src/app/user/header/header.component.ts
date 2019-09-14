import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService, private userService:UserService, private router: Router) { 

    auth.user$.subscribe(user=>{
      if(user.email=="aliidrees7777@gmail.com"){

        this.router.navigate(['/admin']);
      }
    }); 
    auth.user$.subscribe(user=>console.log(user));
    

  }

  ngOnInit() {
  }

  login(){
    this.auth.login();  
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
