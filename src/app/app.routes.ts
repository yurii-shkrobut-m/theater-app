import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component'
import { TabsComponent } from './components/tabs/tabs.component'

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: TabsComponent },
];
