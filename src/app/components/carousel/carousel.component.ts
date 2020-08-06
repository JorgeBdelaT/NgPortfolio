import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

import { ProjectCardComponent } from 'src/app/components/project-card/project-card.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items;
  currentIndex = 0;

  @ViewChild('carouselItems', { static: true, read: ViewContainerRef })
  container;
  componentRefArr: ComponentRef<ProjectCardComponent>[] = [];
  factory = this.resolver.resolveComponentFactory(ProjectCardComponent);

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.createCards();
  }

  onClick = (i: number) => {
    this.currentIndex = i;
    this.container.clear();
    this.createCards();
  };

  createCards() {
    this.componentRefArr = [];
    const types = ['left', 'right', 'down'];
    types.forEach((type) => {
      const componentRef = this.container.createComponent(this.factory);
      this.componentRefArr.push(componentRef);
      componentRef.instance.data = this.items[this.currentIndex];
      componentRef.instance.type = type;
    });
  }
}
