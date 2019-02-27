import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
    // fondo completo carouse
    let $item = $('.carousel-item');
    let $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
      let $src = $(this).attr('src');
      let $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });

    $(window).on('resize', function () {
      $wHeight = $(window).height();
      $item.height($wHeight);
    });

    $('.carousel').carousel({
      interval: 6000,
      pause: false
    });

  }
  // funcion para ocultar toggler
  toggleCollapse() {
    this.show = !this.show;
  }
  toggleOff() {
    this.show = false;
  }

}
