import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navigationService: NavigationService
  ) {
    this.justLoaded = true;
  }

  ngOnInit(): void {
    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.navigationService.previousRoutePath.subscribe((prev) => {
      if (prev === '/about') {
        this.scrollDirection = 'up';
      }
    });

    setTimeout(() => (this.justLoaded = false), 1000 * 0.1);
  }

  @HostListener('window:scroll', []) // for window scroll events
  onScroll() {
    if (!this.justLoaded) {
      const verticalOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (verticalOffset > this.lastScroll) {
        this.router.navigateByUrl('/about');
      } else if (verticalOffset < this.lastScroll) return;
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }

    // console.log(verticalOffset);
  }
}
