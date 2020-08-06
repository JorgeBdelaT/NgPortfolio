import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
