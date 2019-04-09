import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { RestaurantInterface } from '../models/restaurant';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private afs: AngularFirestore ) {
    this.restaurantsCollection = afs.collection<RestaurantInterface>('restaurante');
    this.restaurants = this.restaurantsCollection.valueChanges();

   }

  private restaurantsCollection: AngularFirestoreCollection<RestaurantInterface>;
  private restaurants: Observable<RestaurantInterface[]>;

  getAllRestaurants( ) {
    return this.restaurants = this.restaurantsCollection.snapshotChanges().pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as RestaurantInterface;
        data.idRestaurante = action.payload.doc.id;
        return data;
      });
    }));
  }
  addRestaurant() {

  }
  updateRestaurant() {

  }
  deleteRestaurant() {

  }
}
