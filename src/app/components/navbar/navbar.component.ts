import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
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
        if (pos <= 577) {
            window.scrollTo(0, pos + 20);
        } else {
          if (pos > 597) {
            window.scrollTo(0, pos - 20);
          } else {
            window.clearInterval(scrollToTop);
          }
        }
    }, 16);
  }

}
