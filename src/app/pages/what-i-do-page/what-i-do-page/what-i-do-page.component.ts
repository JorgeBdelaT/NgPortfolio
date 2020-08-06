import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-what-i-do-page.component',
  templateUrl: './what-i-do-page.component.html',
  styleUrls: ['./what-i-do-page.component.scss'],
})
export class WhatIDoPageComponent implements OnInit {
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
    this.firestoreService.getResources('whatido').subscribe((dataSnapshot) => {
      dataSnapshot.forEach((item: any) => {
        this.data.push(item.payload.doc.data());
        this.loading = false;
      });
    });

    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.navigationService.previousRoutePath.subscribe((prev) => {
      if (prev === '/about') {
        this.scrollDirection = 'down';
      } else if (prev === '/skills') {
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
        this.router.navigateByUrl('/skills');
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/about');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }
}
