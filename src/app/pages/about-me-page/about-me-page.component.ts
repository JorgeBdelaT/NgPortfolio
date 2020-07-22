import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
})
export class AboutMePageComponent implements OnInit {
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
        this.router.navigateByUrl('/whatido');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/');
        console.log('going up!!');
      }
      this.lastScroll = verticalOffset;
    }

    // console.log(verticalOffset);
  }
}
