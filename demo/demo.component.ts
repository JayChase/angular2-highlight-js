import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { HighlightJsService } from '../src/highlight-js.service'; //in live this would be the node_modules path

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css']
})

export class DemoComponent implements OnInit, AfterViewInit {
    sampleContent: string = "";

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