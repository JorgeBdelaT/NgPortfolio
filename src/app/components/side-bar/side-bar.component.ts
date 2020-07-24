import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Pages } from './side-bar-component.helper';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  upRoute: string;
  downRoute: string;
  showUp = false;
  showDown = false;
  showMain = true;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.upRoute = Pages[e.url].up;
        this.downRoute = Pages[e.url].down;
      }
    });
  }

  ngOnInit(): void {
    this.navigationService.currentUrl.subscribe((url) => {
      if (url === '' || url === '/') {
        this.showUp = false;
        this.showDown = false;
        this.showMain = true;
      } else if (url === '/contact') {
        this.showDown = false;
        this.showUp = true;
        this.showMain = false;
      } else {
        this.showDown = true;
        this.showUp = true;
        this.showMain = false;
      }
    });
  }
}
