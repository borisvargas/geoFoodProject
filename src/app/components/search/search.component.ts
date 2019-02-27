import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $('.icon-1').click(function() {
        $('.input').toggleClass('active');
        $('.contain').toggleClass('active');
      });
    });
  }

}
