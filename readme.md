###angular2-highlight-js

[highlight.js](https://highlightjs.org) integration with Angular2.

###Install

```bash
npm install --save angular2-highlight-js
```

###Setup

####Add highlight.js

Load the highlight.js theme css in your single page

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai_sublime.min.css">
```

and the core script,

```html
 <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
```

and any additional languages

```html
 <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/typescript.min.js"></script>
```

####SystemJS

In the SystemJs config file (systemjs.config.js) add a mapping for the package

```javascript
var map = {
    ...
    'angular2-highlight-js': 'node_modules/angular2-highlight-js'
};
```

and add the package to the list of packages

 ```javascript
var packages = {
    ...
    'angular2-highlight-js': { main: 'lib/index.js', defaultExtension: 'js' }
};
```

###Usage

This library contains the following: **HighlightJsDirective**, **HighlightJsContentDirective** and **HighlightJsService**.
Below are usage notes for each. A demo app is also available as in the [repo](https://github.com/Useful-Software-Solutions-Ltd/angular2-highlight-js/tree/master/demo).

####For HighlightJsDirective

Import the directive and declare it.

```typescript
import { HighlightJsDirective } from 'angular2-highlight-js';

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [
    ],
    directives: [
        MD_CARD_DIRECTIVES,
        HighlightJsDirective
    ]
})
```

Add pre code to the view as normal with highlightjs and add the **highlight-js** attribute to the code element

```html
<pre>
    <code highlight-js class="typescript">
        export class HighlightJsDirective implements AfterContentInit {
            @Input() useBr: boolean;

            constructor(private elementRef: ElementRef, renderer: Renderer) {

            }

            ngAfterContentInit() {
                if (this.useBr) {
                    hljs.configure({ useBR: true });
                }

                hljs.highlightBlock(this.elementRef.nativeElement);
            }
        }
    </code>
</pre>
```

####For HighlightJsContentDirective

Use this to highlight the contents of and element which will be set dynamically (by setting innerHTML for example).

Import the directive and declare it.

```typescript
import { HighlightJsContentDirective } from 'angular2-highlight-js';

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [        
    ],
    directives: [
        MD_CARD_DIRECTIVES,
        HighlightJsContentDirective
    ]
})
```

Add the attribute **highlight-js-content** to the element which will have content that requires highlighting.
When the content is changed the directive will look for all child elements which match the selector provided and highlight them.
If not selector is given it will default to finding all code elements.

```html
<section [innerHTML]="sampleContent" highlight-js-content=".highlight"></section>
```

####For HighlightJsService

This can be used to highlight code blocks from the code.

Import the service and declare the provider.

```typescript
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [
        HighlightJsService
    ],
    directives: [
        MD_CARD_DIRECTIVES
    ]
})
```

In the component AfterViewInit hook call the **highlight** function passing in the code block element.

```typescript
export class DemoComponent implements OnInit, AfterViewInit {

    constructor(private el: ElementRef, private service : HighlightJsService) {

    }

    ngOnInit() { }

    ngAfterViewInit() {        
        this.service.highlight(this.el.nativeElement.querySelector('.typescript'));
    }
}
```

If you don't use a container that preserve line breaks call with the **useBR** argument true.