import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  scrollPosition: [number, number] = [0, 10];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e) => {
        if ((e as Scroll).position) {
          this.viewportScroller.scrollToPosition(this.scrollPosition);
        } else {
          this.viewportScroller.scrollToPosition(this.scrollPosition);
        }
      });
  }

  ngAfterViewInit() {
    this.viewportScroller.scrollToPosition(this.scrollPosition);
  }
}
