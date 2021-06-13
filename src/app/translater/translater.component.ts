import { Component } from '@angular/core';
import { TranslaterService } from '../services/translater.service';
@Component({
  selector: 'shakespeare-translater',
  templateUrl: './translater.component.html',
  styleUrls: ['./translater.component.css']
})
export class TranslaterComponent {
  englishText: String = "";
  shakespeareText: String = "";

  constructor(private translate: TranslaterService) { }

  clicked(): void {
    this.translate.gettranslation(this.englishText).subscribe({
      next: result => this.shakespeareText = result.contents.translated,
      error: err => console.log(err)
    });
  }

}
