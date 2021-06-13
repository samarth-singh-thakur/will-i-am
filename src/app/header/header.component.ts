import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shakespeare-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quotes: String[] = [
    "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date",
    "The common curse of mankind, - folly and ignorance",
    "Nature teaches beasts to know their friends"
  ]
  item: String = ""

  ngOnInit(): void {
    this.item = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

}
