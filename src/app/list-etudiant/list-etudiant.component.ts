import { Component } from '@angular/core';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {
 Etudiant: Etudiant[];

  constructor(private etudiantService: EtudiantService){}

  ngOnInit(){
    this.etudiantService.getEtudiantList().subscribe(res =>{
        this.Etudiant = res.map(e => {
          return{
            id : e.payload.doc.id,
            ...e.payload.doc.data() as{}
          } as Etudiant;
        })
    });
  }

  removeEtudiant(Etudiant){
    if(confirm("Voulez-vous vraiment supprimer "+Etudiant.firstname)){
      this.etudiantService.deleteEtudiant(Etudiant);
    }
  }
}
