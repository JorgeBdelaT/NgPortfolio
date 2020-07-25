import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

import { TypingComponent } from 'src/app/components/typing-box/typing/typing.component';

@Component({
  selector: 'app-typing-box',
  templateUrl: './typing-box.component.html',
  styleUrls: ['./typing-box.component.scss'],
})
export class TypingBoxComponent implements OnInit {
  @Input() lines: string[];

  @ViewChild('typingbox', { static: true, read: ViewContainerRef }) container;
  componentRefArr: ComponentRef<TypingComponent>[] = [];

  factory = this.resolver.resolveComponentFactory(TypingComponent);

  currentLine = 0;
  loopTime = 1000 * 10;
  initialDelay = 1000 * 0.5;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    setTimeout(() => this.startTyping(), this.initialDelay);
  }

  ngOnDestroy() {
    for (let componentRef of this.componentRefArr) {
      componentRef.destroy();
    }
  }

  startTyping() {
    if (this.currentLine < this.lines.length) {
      const componentRef = this.container.createComponent(this.factory);
      this.componentRefArr.push(componentRef);
      componentRef.instance.text = this.lines[this.currentLine];

      if (this.currentLine === this.lines.length - 1) {
        componentRef.instance.last = true;
        componentRef.instance.loopBack.subscribe(() => this.onLoopBack());
      }

      componentRef.instance.finishTyping.subscribe(() => {
        this.currentLine++;
        this.startTyping();
      });
    }
  }

  onLoopBack() {
    setTimeout(() => {
      this.container.clear();
      this.currentLine = 0;
      this.startTyping();
    }, this.loopTime);
  }
}
