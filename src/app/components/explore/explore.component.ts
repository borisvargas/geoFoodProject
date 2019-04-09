import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
 // datos google map
 public lat: number = -16.488653;
 public lng: number = -68.141724;
 public zoom: number = 16.2;

  constructor( private dataApi: DataApiService ) {
  }

  ngOnInit() {
    this.toNavlink();
    this.dataApi.getAllRestaurants().subscribe( restaurants => {
      console.log('restaurants', restaurants);
    });
  }

  toNavlink() {
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
}
