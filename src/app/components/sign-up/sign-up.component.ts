import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public nombre: string = '';
  public apellido: string = '';
  public correo: string = '';
  public image: string = '';

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password).then( res => {
      this.router.navigate(['explore']);
    }).catch( err => console.log('err', err.message) );
  }
  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password).then( res => {
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then( res => {
      this.correo = res.additionalUserInfo.profile['email'];
      this.apellido = res.additionalUserInfo.profile['family_name'];
      this.nombre = res.additionalUserInfo.profile['given_name'];
      this.image = res.additionalUserInfo.profile['picture'];
      // console.log('userRes', res);
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser().then( res => {
      this.correo = res.additionalUserInfo.profile['email'];
      this.apellido = res.additionalUserInfo.profile['last_name'];
      this.nombre = res.additionalUserInfo.profile['first_name'];
      // console.log('res', res);
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.mesagge));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['explore']);
  }

}
