import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit {
  lastScroll: number;
  justLoaded: boolean;
  scrollDirection: string;

  data = [
    {
      id: 0,
      title: 'Torpedo Mensajeros',
      date: '2017-2018',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 1,
      title: 'Consejo Nacional para Innovación y Desarrollo',
      date: '01/12/2017 - 31/12/2017',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 2,
      title: 'Triciclos',
      date: '01/04/2018 - 01/07/2018',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 3,
      title: 'CONASET',
      date: '04/2018 - 07/2018',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 4,
      title: 'Etnova/Dimerc Labs',
      date: '01/11/2018 - 01/04/2019',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 5,
      title: 'Ayudante Desafíos de la Ingeniería | ING1004',
      date: '03/2018-07/2018',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 6,
      title: 'Ayudante Ingeniería de Software | IIC214',
      date: '03/2019-07/2019',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 7,
      title: 'Internship at Forcast',
      date: '12/2019-02/2020',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 8,
      title: 'Taller de Prototipado Digital UC',
      date: '03/2019-12/2019',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 9,
      title: 'Ayudante   Aplicaciones y Tecnologías Web | IIC2513',
      date: '03/2020-07/2020',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
    },
    {
      id: 10,
      title: 'Forcast Part-time Developer',
      date: '03/2020-07/2020',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio ea at, eaque inventore tempore reprehenderit et laboriosam expedita eum? Molestias corporis deserunt cupiditate sint voluptates praesentium saepe at quaerat.',
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
