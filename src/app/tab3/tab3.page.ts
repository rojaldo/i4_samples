import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  uploads: any[];
  files: Observable<any>;
  percent: Observable<number>;

  constructor (public afs: AngularFirestore, public storage: AngularFireStorage) {}

  ionViewDidEnter() {
    console.log('ionViewDidLoad');
    this.files = this.afs.collection('files').valueChanges();
  }

  upload(event) {
    this.uploads = [];
    const filelist = event.target.files;
    const percentages: Observable<number>[] = [];
    for (const file of filelist) {
      const path = 'files/' + file.name;
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      this.percent = task.percentageChanges();
      percentages.push(this.percent);

      const uploadTrack = {
        fileName: file.name,
        percentage: this.percent
      };
      this.uploads.push(uploadTrack);
    }
  }
}
