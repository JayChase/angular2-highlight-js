### angular2-highlight-js

[highlight.js](https://highlightjs.org) integration with Angular2.

#### Quick links

[Plunker template](http://embed.plnkr.co/EdxsaT/)

###Install

```bash
npm install --save angular2-highlight-js
```

### Setup

#### Add highlight.js

Load the highlight.js theme css in your single page

```html
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/monokai_sublime.min.css"
/>
```

and the core script,

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
```

and any additional languages

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/typescript.min.js"></script>
```

#### For SystemJS

In the SystemJs config file (systemjs.config.js) add a mapping for the package

```javascript
var map = {
    ...
    'angular2-highlight-js': 'node_modules/angular2-highlight-js/lib'
};
```

and add the package to the list of packages

```javascript
var packages = {
    ...
    'angular2-highlight-js': { main: 'highlight-js.module', defaultExtension: 'js'}
};
```

#### Or for angular-cli

Just install the package and then import the module as below.

Import the **HighlighJsModule** at the appropiate level in your app. If you are going to use the **HighlightJsService** than add the provider too.

For example in **app.module.ts**

```javascript
import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DemoComponent } from './demo.component';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

...

@NgModule({
    imports: [
        //A2 stuff
        BrowserModule,
        HighlightJsModule,
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
```

### Installation

```bash
npm install --save angular2-highlight-js highlight.js
```

### Usage

In **app.module.ts** import the highlight.js library and any languages you will be highlighting.

```typescript
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
```

Import the **AngularHighlightJsModule**.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [...AngularHighlightJsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

This library contains the **HighlightJsContentDirective**
Below are usage notes for each. A demo app is also available as in the [repo]().

#### For hljsContent directive

Use this to highlight the contents of and element which will be set dynamically (by setting innerHTML for example).

Import the directive and declare it.

```typescript

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css']
})
```

Add the attribute **hljsContent** to the element which will have content that requires highlighting.
When the content is changed the directive will look for all child elements which match the selector provided and highlight them. If no selector is given it will default to finding all code elements.

```html
<section [innerHTML]="sampleContent" hljsContent=".highlight"></section>
```

You can configure **highlight.js** by using the **[options]** property on the directive

```html
<section
  [innerHTML]="sampleContent"
  hljsContent=".highlight"
  [options]="{ useBr: true }"
></section>
```
