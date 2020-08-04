import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  icon = 'fa fa-exclamation-triangle';
  message = 'Page not found';

  constructor() {}

  ngOnInit(): void {}
}
