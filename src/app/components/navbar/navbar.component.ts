import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean = false;

  constructor(private as:AuthService) { }

  ngOnInit() {
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen;
  }
  logout(){
   this.as.logout().then(() => console.log('loged-out'))
  }

}
