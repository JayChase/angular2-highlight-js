###angular2-highlight-js

[highlight.js](https://highlightjs.org) integration with Angular2.

PRE-ALPHA: please wait for a day then it will be ready.

###Install

```bash
npm install --save angular2-highlight-js
```

###Setup

####Add the highlight.js script

Load the highlight.js in your single page.

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"></script>
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


