import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-i-do-page.component',
  templateUrl: './what-i-do-page.component.html',
  styleUrls: ['./what-i-do-page.component.scss'],
})
export class WhatIDoPageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;

  constructor(private router: Router) {
    this.justLoaded = true;
  }

  ngOnInit(): void {
    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    console.log('initial offset', this.lastScroll);

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
        console.log('going down!!');
        this.router.navigateByUrl('/skills');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/about');
        console.log('going up!!');
      }
      this.lastScroll = verticalOffset;
    }

    // console.log(verticalOffset);
  }
}
