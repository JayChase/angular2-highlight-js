import { Directive, ElementRef, NgZone, Input, NgModule } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentDirective {
    /**
     * @param {?} elementRef
     * @param {?} zone
     */
    constructor(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.done = false;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        // tslint:disable-next-line: no-string-literal
        if (simpleChanges['options'] && this.options) {
            hljs.configure(this.options);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.done) {
            /** @type {?} */
            const selector = this.highlightSelector || 'code';
            if (this.elementRef.nativeElement.innerHTML &&
                this.elementRef.nativeElement.querySelector) {
                /** @type {?} */
                const snippets = this.elementRef.nativeElement.querySelectorAll(selector);
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    for (const snippet of snippets) {
                        hljs.highlightBlock(snippet);
                    }
                }));
                this.done = true;
            }
        }
    }
}
ContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hljsContent]'
            },] }
];
/** @nocollapse */
ContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
ContentDirective.propDecorators = {
    options: [{ type: Input }],
    highlightSelector: [{ type: Input, args: ['hljsContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularHighlightJsModule {
}
AngularHighlightJsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ContentDirective],
                imports: [],
                exports: [ContentDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularHighlightJsModule, ContentDirective };
//# sourceMappingURL=angular-highlight-js.js.map
