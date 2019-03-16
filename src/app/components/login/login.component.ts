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
  public nombre: String;
  public email: String;
  constructor( public afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
       /*[ Focus input ]*/
      /*
      $('.input100').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() !== '') {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        });
      });
      */
    /*==================================================================
    [ Validate ]*/
    /*
    let input = $('.validate-input .input100');
    $('.validate-form').on('submit', function() {
        let check = true;
        for (let i = 0; i < input.length; i++) {
            if (validate(input[i]) === false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    */
    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
           hideValidate(this);
        });
    });
    /*
    function validate (input) {
        if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() === '') {
               return false;
            }
        }
    }
    */
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
  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then( res => {
      console.log('userRes', res);
      this.router.navigate(['explore']);
    }).catch( err => console.log('err', err));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser().then( res => {
      console.log('res', res);
      this.router.navigate(['explore']);
    }).catch( err => console.log('err', err));
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
