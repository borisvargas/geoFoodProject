import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  /*
  public clientID = 'RJLPLCSKDBLD0YZIBLDPDLN2S2LLLREQOGAILZD0UCMEWDUG';
  public clientSecret = 'CKRU03QQYJYTMSSRDBCOST0SPFHGEIXIJNQVBQNF0ARHC3HL';
  public server: String = 'https://api.foursquare.com/v2/venues/explore';
  public query: String = 'client_id=' + this.clientID + '&client_secret=' + this.clientSecret + '&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee';
  */
  constructor() { }

  ngOnInit() {
  }
  /*
  loadData() {
    fetch(this.server + '?' + this.query)
    .then(function() {
        // Code for handling API response
        console.log();
    })
    .catch(function() {
        // Code for handling errors
    });
  }
  */

}
