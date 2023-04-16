import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: Observable<firebase.default.User | null>;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    // initialiser la propriété authState$
    this.authState$ = this.fireauth.authState;
  }

  //method login 
  login(emal: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(emal, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

  //register method
  register(emal: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(emal, password).then(() => {
      alert('Votre compte a été crée avec succès!')
      this.router.navigate(['dashboard']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  //Sign Out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') === 'true';
  }
  
}
