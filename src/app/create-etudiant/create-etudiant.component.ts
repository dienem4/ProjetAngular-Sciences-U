import { Component } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent {
  public etudiantForm: FormGroup;

  constructor(
               public etudiantService: EtudiantService,
                public formBuilder: FormBuilder,
                public router: Router
              )
              {
                this.etudiantForm = this.formBuilder.group({
                  firstname: [''],
                  email: [''],
                  etudiant_course: [''],
                  fees: ['']
                })
              }

      ngOnInit(): void {

      }

      onSubmit(){
        this.etudiantService.createEtudiant(this.etudiantForm.value);
        this.router.navigate(['list-etudiant']);
      }
}
