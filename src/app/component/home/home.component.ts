import { Component } from '@angular/core';
import { Etudiant } from 'src/app/etudiant.model';
import { EtudiantService } from 'src/app/etudiant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
