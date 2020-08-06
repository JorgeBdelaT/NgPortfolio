import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  @ViewChild('tooltip', { static: false }) tooltipRef: ElementRef;
  emailCopied = false;
  tooltipText = 'Click to copy to clipboard!';

  message = 'Contact me if you want to work together!';
  networks;
  email;

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
    this.firestoreService.getResources('networks').subscribe((dataSnapshot) => {
      dataSnapshot.forEach((projectData: any) => {
        this.data.push(projectData.payload.doc.data());
        this.email = this.data.filter((data) => data.email)[0];
        this.networks = this.data.filter((data) => !data.email);
        this.loading = false;
      });
    });

    this.lastScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.navigationService.previousRoutePath.subscribe((prev) => {
      if (prev === '/projects') {
        this.scrollDirection = 'down';
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
      } else if (verticalOffset < this.lastScroll) {
        this.router.navigateByUrl('/projects');
      }
      this.lastScroll = verticalOffset;
    } else {
      this.viewportScroller.scrollToPosition([0, 10]);
    }
  }

  copyEmail() {
    navigator.clipboard
      .writeText(this.email.text)
      .then(() => {
        this.tooltipRef.nativeElement.style.display = 'flex';
        this.tooltipText = 'Email copied to clipboard!';
      })
      .catch((e) => console.error(e));
  }
}
