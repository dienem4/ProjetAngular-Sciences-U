import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etudiant-angular-science';
  isLoggedIn = false; // par défaut, l'utilisateur n'est pas connecté

  constructor(private authService: AuthService) { }

  ngOnInit() {
    //vérifier l'état de l'authentification à chaque chargement de page
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }
  
}
