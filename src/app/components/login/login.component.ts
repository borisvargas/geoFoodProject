import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor( public afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
           hideValidate(this);
        });
    });
    function showValidate(input) {
        const thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        const thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
  }
  // funcion para ir al lugar especifico
  toNavlink(event) {
    const scrollToTop: number = window.setInterval(() => {
        const pos: number = window.pageYOffset;
        if (pos <= 597) {
          window.scrollTo(0, pos + 20);
        } else {
        if (pos > 617) {
          window.scrollTo(0, pos - 20);
        } else {
          window.clearInterval(scrollToTop);
        }
      }
    }, 16);
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password).then( res => {
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then( res => {
      // console.log('userRes', res);
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser().then( res => {
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
