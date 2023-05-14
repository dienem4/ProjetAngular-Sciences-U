import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {

  email : string = '';
  password : string = '';
  language = 'fr';


  constructor(private auth : AuthService, private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }



  ngOnInit(): void {
  }

  register() {

    if(this.email == '') {
      alert('Entrez votre adresse email s\'il vous plait');
      return;
    }

    if(this.password == '') {
      alert('Entrez votre mot de passe s\'il vous plait');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

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
