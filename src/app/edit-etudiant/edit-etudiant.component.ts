import { Component } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent {
    
  public editForm: FormGroup;
  etudiantRef: any;

  constructor(
                public etudiantService: EtudiantService,
                public formBuilder: FormBuilder,
                private act: ActivatedRoute,
                private router: Router
              )
              {
                this.editForm = this.formBuilder.group({
                  firstname: [''],
                  email: [''],
                  etudiant_course: [''],
                  fees: ['']
                })
              }

      ngOnInit(): void {
          const id = this.act.snapshot.paramMap.get('id');

          this.etudiantService.getEtudiantDoc(id).subscribe(res => {
            this.etudiantRef = res;
            this.editForm = this.formBuilder.group({
              firstname:[this.etudiantRef.firstname],
              email:[this.etudiantRef.email],
              etudiant_course:[this.etudiantRef.etudiant_course],
              fees:[this.etudiantRef.fees]
            })
          })
      }

      onSubmit(){
        const id = this.act.snapshot.paramMap.get('id');
        this.etudiantService.updateEtudiant(this.editForm.value, id);
        this.router.navigate(['list-etudiant']);
      }
}
