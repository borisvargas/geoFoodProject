// ng2-routes
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContentComponent } from './components/content/content.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';


const APP_ROUTES: Routes = [
    { path: 'content', component: ContentComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signUp', component: SignUpComponent},
    { path: 'explore', component: ExploreComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'content' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
