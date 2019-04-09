import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../models/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private authService: AuthService ) { }
  user: UsuarioInterface = {
    nombre: '',
    email: '',
    photoUrl: ''
  };
  public providerId: string = 'null';
  ngOnInit() {
    this.authService.isAuth().subscribe( user => {
      if (user) {
        this.user.nombre = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        // console.log('USER', user);
      }
    });
  }

}
