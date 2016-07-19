import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HighlightJsService } from '../src/';
export declare class DemoComponent implements OnInit, AfterViewInit {
    private el;
    private service;
    code: string;
    constructor(el: ElementRef, service: HighlightJsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
