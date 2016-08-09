import { Directive, ElementRef, Input, OnInit, AfterViewChecked } from '@angular/core';

declare var hljs: any;

@Directive({ selector: '[highlight-js-content]' })

export class HighlightJsContentDirective implements OnInit, AfterViewChecked {
    @Input() useBr: boolean;
    @Input('highlight-js-content') highlightSelector: string;

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        if (this.useBr) {
            hljs.configure({ useBR: true });
        }
    }

    ngAfterViewChecked() {
        let selector = this.highlightSelector || 'code';

        if (this.elementRef.nativeElement.innerHTML) {

            let snippets = this.elementRef.nativeElement.querySelectorAll(selector);
            
            for(var snippet of snippets){
                hljs.highlightBlock(snippet);
            } 
        }
    }
}