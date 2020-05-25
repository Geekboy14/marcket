import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = ''
  constructor(private as:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    let data = form.value
    this.as.login(data.email, data.password).then(result => console.log(result)).catch(err => console.log(err))
    .catch(err => {
      this.errorMessage = err.message
    })

    this.router.navigate([''])

  }

}
