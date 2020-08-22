import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firebaseAuth : AngularFireAuth) { }

  // signInWithEmail(email: string, password: string): Promise<auth.UserCredential> {
  //   return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  // }

  // signUpWithEmail(email: string, password: string): Promise<auth.UserCredential> {
  //   return this.angularFire.createUserWithEmailAndPassword(email, password);
  // }
}
