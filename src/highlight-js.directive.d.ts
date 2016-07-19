import { ElementRef, Renderer, AfterContentInit } from '@angular/core';
export declare class HighlightJsDirective implements AfterContentInit {
    private elementRef;
    useBr: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngAfterContentInit(): void;
}
