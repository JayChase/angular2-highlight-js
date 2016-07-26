import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

import { HighlightJsService, HighlightJsDirective, HighlightJsContentDirective } from '../src/'; //in live this would be the node_modules path

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
        MD_BUTTON_DIRECTIVES,
        HighlightJsDirective,
        HighlightJsContentDirective
    ]
})

export class DemoComponent implements OnInit, AfterViewInit {
    sampleContent: string;

    constructor(private el: ElementRef, private service: HighlightJsService) {

    }

    ngOnInit() { }

    ngAfterViewInit() {
        
    }

    highlightByService(target: ElementRef) {
        this.service.highlight(target);
    }

    addContent() {
        this.sampleContent = `
         <pre>
            <code class="typescript highlight">
                class Greeter {
                    constructor(public greeting: string) { }

                    greet() {
                        return "hello world";
                    }
                };
            </code>
        </pre>
        <pre>
            <code class="javascript highlight">
                alert('Hello, World!');
            </code>
        </pre>
        `;
    }
}