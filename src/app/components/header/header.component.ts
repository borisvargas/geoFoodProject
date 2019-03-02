import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // fondo completo carouse
    const $item = $('.carousel-item');
    let $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');
    $('.carousel img').each(function() {
      const $src = $(this).attr('src');
      const $color = $(this).attr('data-color');
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
    /*
     $('.carousel').carousel({
       interval: 6000,
       pause: false
    });
    */
  }
}
