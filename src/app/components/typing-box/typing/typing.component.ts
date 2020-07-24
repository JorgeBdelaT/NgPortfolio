import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit {
  @Input() text: string;
  @Input() last = false;

  @Output() finishTyping = new EventEmitter();
  @Output() loopBack = new EventEmitter();

  @ViewChild('typing', { static: true }) el: ElementRef;

  displayedText = '';
  waiting = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.typewritte();
  }

  async typewritte() {
    for (let letter of this.text) {
      if (letter != '&') {
        this.waiting = false;
        const text = this.renderer.createText(letter);
        this.renderer.appendChild(this.el.nativeElement, text);
      } else {
        this.waiting = true;
        await this.sleep(600);
      }
      await this.sleep(100);
    }
    if (this.last) {
      this.waiting = true;
      this.loopBack.emit();
    } else {
      this.renderer.addClass(this.el.nativeElement, 'not-last');
      this.finishTyping.emit();
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
