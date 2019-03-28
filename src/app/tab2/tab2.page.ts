import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private afs: AngularFirestore) { }

  tasksRef: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;
  sender = 'Daniel';

  ionViewDidEnter() {
    console.log('ionViewDidLoad');
    this.tasksRef = this.afs.collection<Message>('message');
    this.messages = this.tasksRef.valueChanges();
  }

addTask(title: string) {
  this.tasksRef.add({message: title, sender: this.sender, emotion: 0, date: new Date()});
}

}

