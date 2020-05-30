import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser:boolean= false;
  isOpen:boolean = false;

  constructor(private as:AuthService) { }

  ngOnInit() {
  this.as.user.subscribe(user => {
    if(user) {
      this.isUser = true;
      this.as.userId = user.uid
    }
    else {
      this.isUser = false;
      this.as.userId = ''
    }
  })
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen;
  }
  logout(){
   this.as.logout()
  }

}
