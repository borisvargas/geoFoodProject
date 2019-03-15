import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false;
  constructor( private authService: AuthService, private afsAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.getCurrentUser(); // para comprabar si esta loggeado
    // ocultar y aparecer
    window.onscroll = function (e) {
      const scroll: number = window.scrollY;
      const headerScroll = document.querySelector('#navegacion-principal');
      if (scroll > 200) {
          headerScroll.classList.add('bg-success');
      } else {
          headerScroll.classList.remove('bg-success');
      }
    };
  }
  // metodo para ir arriba en el cambio de pagina
  onActivate(event) {
    const scrollToTop: number = window.setInterval(() => {
        const pos: number = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }
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
  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        console.log('ussr logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }
  onLogout() {
    this.afsAuth.auth.signOut();
  }
}
