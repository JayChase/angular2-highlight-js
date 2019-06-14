import { Directive, ElementRef, NgZone, Input, NgModule } from '@angular/core';
import { __values } from 'tslib';
import hljs from 'highlight.js/lib/highlight';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentDirective = /** @class */ (function () {
    function ContentDirective(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.done = false;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ContentDirective.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        // tslint:disable-next-line: no-string-literal
        if (simpleChanges['options'] && this.options) {
            hljs.configure(this.options);
        }
    };
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.done) {
            /** @type {?} */
            var selector = this.highlightSelector || 'code';
            if (this.elementRef.nativeElement.innerHTML &&
                this.elementRef.nativeElement.querySelector) {
                /** @type {?} */
                var snippets_1 = this.elementRef.nativeElement.querySelectorAll(selector);
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    var e_1, _a;
                    try {
                        for (var snippets_2 = __values(snippets_1), snippets_2_1 = snippets_2.next(); !snippets_2_1.done; snippets_2_1 = snippets_2.next()) {
                            var snippet = snippets_2_1.value;
                            hljs.highlightBlock(snippet);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (snippets_2_1 && !snippets_2_1.done && (_a = snippets_2.return)) _a.call(snippets_2);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }));
                this.done = true;
            }
        }
    };
    ContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[hljsContent]'
                },] }
    ];
    /** @nocollapse */
    ContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    ContentDirective.propDecorators = {
        options: [{ type: Input }],
        highlightSelector: [{ type: Input, args: ['hljsContent',] }]
    };
    return ContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularHighlightJsModule = /** @class */ (function () {
    function AngularHighlightJsModule() {
    }
    AngularHighlightJsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ContentDirective],
                    imports: [],
                    exports: [ContentDirective]
                },] }
    ];
    return AngularHighlightJsModule;
}());

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
