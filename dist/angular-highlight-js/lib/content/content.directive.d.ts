import { AfterViewChecked, ElementRef, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { IOptions } from 'highlight.js';
export declare class ContentDirective implements OnChanges, AfterViewChecked {
    private elementRef;
    private zone;
    options: IOptions;
    highlightSelector: string;
    private done;
    constructor(elementRef: ElementRef, zone: NgZone);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngAfterViewChecked(): void;
}
