import { Component, OnInit, Input } from '@angular/core';

interface CardData {
  title: string;
  icon: string;
  content: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardData;

  constructor() {}

  ngOnInit(): void {
    console.log(this.card);
  }
}
