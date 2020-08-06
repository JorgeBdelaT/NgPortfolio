import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  public getResource(resource: string, documentId: string) {
    return this.firestore
      .collection(resource)
      .doc(documentId)
      .snapshotChanges();
  }

  public getResources(resource: string) {
    return this.firestore.collection(resource).snapshotChanges();
  }
}
