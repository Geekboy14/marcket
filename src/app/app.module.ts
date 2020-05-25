import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],

  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD2FiYrbXUqiSnI05A95TgzlImNcA5s1No",
      authDomain: "market-3b4ea.firebaseapp.com",
      databaseURL: "https://market-3b4ea.firebaseio.com",
      projectId: "market-3b4ea",
      storageBucket: "market-3b4ea.appspot.com",
      messagingSenderId: "637831203069",
      appId: "1:637831203069:web:c4131ecb112eb2b7229694",
      measurementId: "G-04H12890Y5"
    })
    ,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
