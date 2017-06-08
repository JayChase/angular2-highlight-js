import { Directive, ElementRef, Input, OnInit, AfterViewChecked, NgZone } from '@angular/core';

declare var hljs: any;

@Directive({
    selector: '[highlight-js-content]'
})

export class HighlightJsContentDirective implements OnInit, AfterViewChecked {
    @Input() useBr: boolean;
    @Input('highlight-js-content') highlightSelector: string;

    constructor(private elementRef: ElementRef, private zone: NgZone) {

    }

    ngOnInit() {
        if (this.useBr) {
            hljs.configure({ useBR: true });
        }
    }

    ngAfterViewChecked() {
        const selector = this.highlightSelector || 'code';

        if (this.elementRef.nativeElement.innerHTML && this.elementRef.nativeElement.querySelector) {
            const snippets = this.elementRef.nativeElement.querySelectorAll(selector);
            this.zone.runOutsideAngular(() => {
                for (const snippet of snippets) {
                    hljs.highlightBlock(snippet);
                }
            });
        }
    }
}
