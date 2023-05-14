import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etudiant-angular-science';
  language = 'fr';
  isLoggedIn = false; 

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
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

  changeLanguage(): void{
    if(this.language === 'fr'){
      this.language = 'en';

    }else{
      this.language = 'fr';
    }
    this.translate.use(this.language);
  }

}
