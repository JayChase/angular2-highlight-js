import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { HighlightJsService, HighlightJsDirective } from '../src/'; //in live this would be the node_modules path

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [
        HighlightJsService
    ],
    directives: [
        MD_CARD_DIRECTIVES,
        HighlightJsDirective
    ]
})

export class DemoComponent implements OnInit, AfterViewInit {

    constructor(private el: ElementRef, private service : HighlightJsService) {

    }

    ngOnInit() { }

    ngAfterViewInit() {        
        this.service.highlight(this.el.nativeElement.querySelector('.highlight-this'));
    }
}