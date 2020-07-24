import { Component, OnInit } from '@angular/core';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  show = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.currentUrl.subscribe((url) => {
      url === '/' || url === '' ? (this.show = false) : (this.show = true);
      console.log(this.show);
    });
  }
}
