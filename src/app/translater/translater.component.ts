import { Component } from '@angular/core';
import { TranslaterService } from '../services/translater.service';
import { translations } from './translation';
@Component({
  selector: 'shakespeare-translater',
  templateUrl: './translater.component.html',
  styleUrls: ['./translater.component.css']
})
export class TranslaterComponent {
  englishText: String = "";
  shakespeareText: String = "";
  ar: translations[] = [];
  constructor(private translate: TranslaterService) { }

  clicked(): void {
    this.translate.gettranslation(this.englishText).subscribe({
      next: result => {
        this.shakespeareText = result.contents.translated
        this.ar.push({ eng: this.englishText, translated: this.shakespeareText });
        this.englishText = ""
      },
      error: err => console.log(err)

    });

  }

}
