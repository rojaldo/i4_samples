import { Component } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Card } from '../model/card';
import { Platform } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe, OrderByPipe } from 'ngx-pipes';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards: Card[] = [];

  constructor(public service: RequestService, public plt: Platform) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad');
    this.getApiInfo();
  }

  processFinal(): void {
  }

  processError(error: any): void {
    console.log(String(error));
  }

  processRequest(data: any) {
    for (const card of data.results) {
      this.cards.push(new Card(card));
      console.log('cards:' + this.cards);    }
  }

  loadData(event: any) {
    this.getApiInfo();
  }

  getApiInfo(): any {
    this.service.getRequest('https://opentdb.com/api.php?amount=10').subscribe(data => this.processRequest(data),
    error => this.processError(error), () => this.processFinal());
  }

  onClick(cardIndex: number, answerIndex: number) {
    this.cards[cardIndex].responded = true;
    this.cards[cardIndex].rightAnswered = (this.cards[cardIndex].correctAnswer === this.cards[cardIndex].answers[answerIndex]);
    this.cards[cardIndex].answerIndex = answerIndex;
  }

  getColor(cardIndex: number, answerIndex: number): string {
    if (this.cards[cardIndex].rightAnswered && this.cards[cardIndex].answerIndex === answerIndex) {
      return 'success';
    } else if (!this.cards[cardIndex].rightAnswered && this.cards[cardIndex].answers[answerIndex] === this.cards[cardIndex].correctAnswer) {
      return 'success';
    } else if (!this.cards[cardIndex].rightAnswered && this.cards[cardIndex].answerIndex === answerIndex) {
      return 'danger';
    }
    return 'medium';
  }

}
