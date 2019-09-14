import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private auth:AuthService, private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  
  logout(){
    this.auth.logout();
    this.router.navigate(['/']);

  }

}
