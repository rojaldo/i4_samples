import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../model/message';

@Pipe({
  name: 'myOrderBy'
})
export class MyOrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newArray = new sortArray(value);
    newArray.sortByDueDate();
    return newArray.myArray;
  }

}

// tslint:disable-next-line:class-name
class sortArray {

  constructor(public myArray: Message[]) { }

  public sortByDueDate(): void {
    this.myArray.sort((a: Message, b: Message) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }

    });
  }
}
