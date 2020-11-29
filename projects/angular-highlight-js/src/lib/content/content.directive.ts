import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { configure, highlightBlock } from 'highlight.js';
// import hljs from 'highlight.js/lib/highlight';

@Directive({
  selector: '[hljsContent]',
})
export class ContentDirective implements OnChanges, AfterViewChecked {
  @Input() options: HLJSOptions;
  @Input('hljsContent') highlightSelector: string;
  private done = false;

  constructor(private elementRef: ElementRef, private zone: NgZone) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    // tslint:disable-next-line: no-string-literal
    if (simpleChanges['options'] && this.options) {
      configure(this.options);
    }
  }

  ngAfterViewChecked() {
    if (!this.done) {
      const selector = this.highlightSelector || 'code';

      if (
        this.elementRef.nativeElement.innerHTML &&
        this.elementRef.nativeElement.querySelector
      ) {
        const snippets = this.elementRef.nativeElement.querySelectorAll(
          selector
        );
        this.zone.runOutsideAngular(() => {
          for (const snippet of snippets) {
            highlightBlock(snippet);
          }
        });

        this.done = true;
      }
    }
  }
}
