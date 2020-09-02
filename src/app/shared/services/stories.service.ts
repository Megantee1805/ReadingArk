import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stories } from '../models/stories';

@Injectable({
  providedIn: 'root'
})


export class StoriesService {

  stories : Observable<Stories[]>
  productsCollectionRef: AngularFirestoreCollection<Stories>;

  constructor() { }
}
