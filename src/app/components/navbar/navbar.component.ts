import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show: Boolean = false;
  constructor() { }

  ngOnInit() {
    // ocultar y aparecer
    window.onscroll = function (e) {
      let scroll = window.scrollY;
      const headerScroll = document.querySelector('#navegacion-principal');
      if (scroll > 200) {
          headerScroll.classList.add('bg-success');
      } else {
          headerScroll.classList.remove('bg-success');
      }
    };
  }
  // funcion para ocultar toggler
  toggleCollapse() {
    this.show = !this.show;
  }
  toggleOff() {
    this.show = false;
  }

}
