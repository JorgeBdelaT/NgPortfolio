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

  constructor() {}

  ngOnInit(): void {
    this.currentEvent = this.events[0];
    this.displayingEvents = this.events.slice(0, this.eventsToShow);
    console.log(this.displayingEvents);
  }

  displayEvents(dir: string) {
    if (dir === 'left') {
      const leftEvent = this.displayingEvents[0];

      if (leftEvent.id === 0) return;

      this.displayingEvents = this.events.slice(
        leftEvent.id - 1,
        leftEvent.id + this.eventsToShow - 1
      );
      console.log(
        'next events:',
        this.events.slice(
          leftEvent.id - 1,
          leftEvent.id + this.eventsToShow - 1
        )
      );
    } else if (dir === 'right') {
      const leftEvent = this.displayingEvents[0];
      const rightEvent = this.displayingEvents[this.eventsToShow - 1];

      if (rightEvent.id >= this.events[this.events.length - 1].id) return;

      this.displayingEvents = this.events.slice(
        leftEvent.id + 1,
        leftEvent.id + this.eventsToShow + 1
      );

      console.log(
        'next events:',
        this.events.slice(
          leftEvent.id + 1,
          leftEvent.id + this.eventsToShow + 1
        )
      );
    }
  }
}
