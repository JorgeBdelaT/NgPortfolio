import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  loading = true;
  data = [];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navigationService: NavigationService,
    private firestoreService: FirestoreService
  ) {
    this.justLoaded = true;
  }

  ngOnInit(): void {
    this.firestoreService.getResources('projects').subscribe((dataSnapshot) => {
      dataSnapshot.forEach((projectData: any) => {
        this.data.push({
          id: projectData.payload.doc.id,
          ...projectData.payload.doc.data(),
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
      if (prev === '/experience') {
        this.scrollDirection = 'down';
      } else if (prev === '/contact') {
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
        this.router.navigateByUrl('/contact');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/experience');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }
}
