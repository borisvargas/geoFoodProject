import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ExploreComponent } from './components/explore/explore.component';

// rutas
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore} from '@angular/fire/firestore';
// modal
import {FormsModule} from '@angular/forms';
// googleMap
import { AgmCoreModule } from '@agm/core';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsRestaurantComponent } from './components/details-restaurant/details-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ContentComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    ExploreComponent,
    ProfileComponent,
    DetailsRestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNRWW7vqg8E6TPvFFc3Tq6Exhga8U3dAU' }),
    AngularFireStorageModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
