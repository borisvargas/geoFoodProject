import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage ) { }

  @ViewChild('imageUser') inputImageUser: ElementRef;

  public nombre: string = '';
  public apellido: string = '';
  public correo: string = '';
  public image: string = '';
  public phone: string = '';

  public email: string = '';
  public password: string = '';

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }
  onUpLoad(event) {
    // console.log(event.target.files[0]);
    const id: string = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(  () => this.urlImage = ref.getDownloadURL() )).subscribe();
  }
  onAddUser() {
    this.authService.registerUser(this.email, this.password).then( res => {
      // console.log('userRes', res);
      this.authService.isAuth().subscribe( user => {
        if (user) {
          user.updateProfile({
            displayName: this.nombre + ' ' + this.apellido,
            photoURL: this.inputImageUser.nativeElement.value
          }).then( () => {
            this.onLoginRedirect();
          }).catch((error) => console.log(error));
        }
      });
    }).catch( err => console.log('err', err.message) );
  }
  onLoginGoogle(): void {
    this.authService.loginGoogleUser().then( res => {
      this.correo = res.additionalUserInfo.profile['email'];
      this.apellido = res.additionalUserInfo.profile['family_name'];
      this.nombre = res.additionalUserInfo.profile['given_name'];
      this.image = res.additionalUserInfo.profile['picture'];
      // console.log('userRes', res);
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser().then( res => {
      this.correo = res.additionalUserInfo.profile['email'];
      this.apellido = res.additionalUserInfo.profile['last_name'];
      this.nombre = res.additionalUserInfo.profile['first_name'];
      // console.log('res', res);
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.mesagge));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(['explore']);
  }

}
