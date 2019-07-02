### angular2-highlight-js

[highlight.js](https://highlightjs.org) integration with Angular.

#### Quick links

### Installation

```bash
npm install --save angular2-highlight-js@latest highlight.js
```

### Usage

Add the highlight.js css for the style you want to use to your app's styles in **angular.json**.

```json
 "styles": [
             "./node_modules/highlight.js/styles/monokai-sublime.css",
              ...
            ],
```

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
import { AngularHighlightJsModule } from 'angular2-highlight-js';
```

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
