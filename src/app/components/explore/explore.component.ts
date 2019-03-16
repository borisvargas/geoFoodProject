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
 // datos google map
 public lat: number = -16.488653;
 public lng: number = -68.141724;
 public zoom: number = 16.2;
  constructor() { }

  ngOnInit() {
    this.toNavlink();
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
