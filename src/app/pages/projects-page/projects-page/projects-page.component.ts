import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  data = [
    {
      title: 'smartform',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum repellat minus, exercitationem cupiditate commodi ipsum quos facere ratione! Animi perferendis aperiam nostrum et ipsa minima illo non temporibus ea fugiat.',
      tasks: [
        'Indolore laboriosam minima provident est, quos quidem',
        'Praesentium qui ut indolore laboriosam minima provident est, quos quidem quibusdam eveniet distinctio tempora',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'Grovident est, quos quidem qui ut indolore laboriosam',
      ],
      img: 'assets/images/smartform.png',
      link: 'https://jorgebdelat.github.io/smart-form/',
      repo: 'https://github.com/JorgeBdelaT/smart-form',
    },
    {
      title: 'financepod',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur voluptas eius, odit cupiditate amet, similique dicta vel dolores necessitatibus officiis deserunt. Delectus soluta aliquam deleniti odio et provident error commodi?',
      tasks: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        'Praesentium qui ut indolore laboriosam minima provident est, quos quidem quibusdam eveniet distinctio tempora',
        'Indolore laboriosam minima provident est, quos quidem',
        'Grovident est, quos quidem qui ut indolore laboriosam',
      ],
      img: 'assets/images/financepod.png',
      link: 'http://financepod.herokuapp.com/',
      repo: 'https://github.com/IIC2513-2019-2/grupo-casitas',
    },
    {
      title: 'cverde page',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla a incidunt nam obcaecati optio corrupti, consectetur, porro harum officiis ex quis assumenda cumque similique, laboriosam voluptatibus enim saepe deleniti impedit.',
      tasks: [
        'Praesentium qui ut indolore laboriosam minima provident est, quos quidem quibusdam eveniet distinctio tempora',
        'Indolore laboriosam minima provident est, quos quidem',
        'Grovident est, quos quidem qui ut indolore laboriosam',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      ],
      img: 'assets/images/cverde.png',
      link: 'http://cverde.org/',
      repo: 'https://github.com/savelozo/cverde-page',
    },
  ];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navigationService: NavigationService
  ) {
    this.justLoaded = true;
  }

  ngOnInit(): void {
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
