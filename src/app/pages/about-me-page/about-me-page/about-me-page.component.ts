import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
})
export class AboutMePageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  data = [];
  loading = true;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navigationService: NavigationService,
    private firestoreService: FirestoreService
  ) {
    this.justLoaded = true;
  }

  ngOnInit(): void {
    this.firestoreService.getResources('aboutme').subscribe((dataSnapshot) => {
      dataSnapshot.forEach((eventData: any) => {
        this.data = eventData.payload.doc.data().paragraphs;

        this.loading = false;
      });
    });

    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      5;

    this.navigationService.previousRoutePath.subscribe((prev) => {
      if (prev === '/') {
        this.scrollDirection = 'down';
      } else if (prev === '/whatido') {
        this.scrollDirection = 'up';
      }
    });

    setTimeout(() => (this.justLoaded = false), 1000 * 0.5);
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
        this.router.navigateByUrl('/whatido');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }
}
