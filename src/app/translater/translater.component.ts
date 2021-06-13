import { Component } from '@angular/core';

@Component({
  selector: 'shakespeare-translater',
  templateUrl: './translater.component.html',
  styleUrls: ['./translater.component.css']
})
export class TranslaterComponent {
  englishText: String = "";
  shakespeareText: String = "";

  constructor() { }

  clicked() {
    this.shakespeareText = this.englishText;
    // do nothing for now
  }

}
