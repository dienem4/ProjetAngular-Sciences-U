import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Etudiant } from './etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private angularFirestore: AngularFirestore) { }

  getEtudiantDoc(id){
    return this.angularFirestore
    .collection('etudiant-collection')
    .doc(id)
    .valueChanges();
  }

  getEtudiantList(){
    return this.angularFirestore
    .collection('etudiant-collection')
    .snapshotChanges();
  }

  createEtudiant(etudiant: Etudiant){
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
      .collection('etudiant-collection')
      .add(etudiant)
      .then(response => {console.log(response)}, error => reject(error));

    });
  }

  deleteEtudiant(etudiant){
    return this.angularFirestore
    .collection('etudiant-collection')
    .doc(etudiant.id)
    .delete();
  }  

  updateEtudiant(etudiant: Etudiant, id){
    return this.angularFirestore
    .collection('etudiant-collection')
    .doc(id)
    .update({
      firstname: etudiant.firstname,
      email: etudiant.email,
      etudiant_course: etudiant.etudiant_course,
      fees: etudiant.fees
    });
  }  
}
