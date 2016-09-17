import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HighlightJsService } from '../src/highlight-js.service';
export declare class DemoComponent implements OnInit, AfterViewInit {
    private service;
    sampleContent: string;
    constructor(service: HighlightJsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    highlightByService(target: ElementRef): void;
    addContent(): void;
}
