import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth  ) { }

  signup(email, password){
  return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afAuth.signOut()
  }
}
