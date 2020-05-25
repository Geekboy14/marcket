import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    errorMessage: string = ''

  constructor(private as:AuthService, private us:UserService,private router: Router ) { }

  ngOnInit() {
  }

  signUp(form) {
    let data:User = form.value
    this.as.signup(data.email, data.password)
    .then(resault => {
      this.errorMessage =''
      this.us.addNewUser(resault.user.uid, data.name, data.address).then(() =>{
        this.router.navigate([''])
      } )
    })
    .catch(err => {
      this.errorMessage = err.message
    })

  }

}
