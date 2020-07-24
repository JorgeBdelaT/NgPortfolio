import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent implements OnInit {
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
      if (prev === '/whatido') {
        this.scrollDirection = 'down';
      } else if (prev === '/experience') {
        this.scrollDirection = 'up';
      }
    });

    setTimeout(() => (this.justLoaded = false), 1000 * 0.1);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.justLoaded) {
      const verticalOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (verticalOffset > this.lastScroll) {
        this.router.navigateByUrl('/experience');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/whatido');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }
}
