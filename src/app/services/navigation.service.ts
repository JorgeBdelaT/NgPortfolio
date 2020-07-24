import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public previousRoutePath = new BehaviorSubject<string>('');
  public currentUrl = new BehaviorSubject<string>('/');

  constructor(private router: Router, private location: Location) {
    this.previousRoutePath.next(this.location.path());
    this.currentUrl.next(this.location.path());

    this.router.events
      .pipe(
        filter((e) => e instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((event: any[]) => {
        this.currentUrl.next(event[1].url);
        this.previousRoutePath.next(event[0].urlAfterRedirects);
      });
  }
}
