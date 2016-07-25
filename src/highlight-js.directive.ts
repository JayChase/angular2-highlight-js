import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

declare var hljs: any;

@Directive({ selector: '[highlight-js]' })

export class HighlightJsDirective implements AfterContentInit {
    @Input() useBr: boolean;

    constructor(private elementRef: ElementRef) {

    }

    ngAfterContentInit() {
        if (this.useBr) {
            hljs.configure({ useBR: true });
        }

        hljs.highlightBlock(this.elementRef.nativeElement);
    }
}