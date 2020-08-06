import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit {
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
    this.firestoreService.getResources('events').subscribe((dataSnapshot) => {
      dataSnapshot.forEach((eventData: any) => {
        this.data.push({
          id: eventData.payload.doc.id,
          ...eventData.payload.doc.data(),
        });

        this.data.sort((a, b) => {
          if (a.start.seconds > b.start.seconds) return 1;
          if (b.start.seconds > a.start.seconds) return -1;

          return 0;
        });

        this.loading = false;
      });
    });

    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.navigationService.previousRoutePath.subscribe((prev) => {
      if (prev === '/skills') {
        this.scrollDirection = 'down';
      } else if (prev === '/projects') {
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
        this.router.navigateByUrl('/projects');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/skills');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }
}
