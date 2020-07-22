import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Pages } from './side-bar-component.helper';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  upRoute: string;
  downRoute: string;

  constructor(private router: Router) {
    console.log(this.router);
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        this.upRoute = Pages[e.url].up;
        this.downRoute = Pages[e.url].down;
      }
    });
  }

  ngOnInit(): void {}
}
