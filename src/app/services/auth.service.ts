import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }
  registerUser() {

  }
  loginEmailUser() {

  }
  loginFacebookUser() {

  }
  loginGoogleUser() {

  }
  logoutUser() {

  }
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
