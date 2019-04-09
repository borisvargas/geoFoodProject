import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { RestaurantInterface } from 'src/app/models/restaurant';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {

  constructor( private dataApi: DataApiService, private route: ActivatedRoute ) { }
  public restaurant: RestaurantInterface = {};

  ngOnInit() {
    const idRestaurant = this.route.snapshot.params['id'];
    this.getDetails(idRestaurant);
  }

  getDetails(idRestaurant: string) {
    this.dataApi.getOneRestaurant(idRestaurant).subscribe( restaurant => {
      // console.log('detalles', restaurant);
      this.restaurant = restaurant;
    } );
  }

}
