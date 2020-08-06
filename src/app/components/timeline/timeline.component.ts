import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() events: any[];
  currentEvent;
  eventsToShow = 4; // number of events to show at one time
  displayingEvents: any[];
  moveDir = '';

  constructor() {}

  ngOnInit(): void {
    this.currentEvent = this.events[0];
    this.displayingEvents = this.events.slice(0, this.eventsToShow);

    this.events.forEach((event, index) => {
      event.index = index;
    });
    console.log(this.events);
  }

  displayEvents(dir: string) {
    this.moveDir = dir;
    if (dir === 'left') {
      const leftEvent = this.displayingEvents[0];

      if (leftEvent.index === 0) return;

      this.displayingEvents = this.events.slice(
        leftEvent.index - 1,
        leftEvent.index + this.eventsToShow - 1
      );
    } else if (dir === 'right') {
      const leftEvent = this.displayingEvents[0];
      const rightEvent = this.displayingEvents[this.eventsToShow - 1];

      if (rightEvent.index >= this.events[this.events.length - 1].index) return;

      this.displayingEvents = this.events.slice(
        leftEvent.index + 1,
        leftEvent.index + this.eventsToShow + 1
      );
    }
  }
}
