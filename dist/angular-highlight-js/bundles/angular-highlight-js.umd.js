(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('highlight.js/lib/highlight')) :
    typeof define === 'function' && define.amd ? define('angular-highlight-js', ['exports', '@angular/core', 'highlight.js/lib/highlight'], factory) :
    (global = global || self, factory(global['angular-highlight-js'] = {}, global.ng.core, global.hljs));
}(this, function (exports, core, hljs) { 'use strict';

    hljs = hljs && hljs.hasOwnProperty('default') ? hljs['default'] : hljs;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
            { type: core.Directive, args: [{
                        selector: '[hljsContent]'
                    },] }
        ];
        /** @nocollapse */
        ContentDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        ContentDirective.propDecorators = {
            options: [{ type: core.Input }],
            highlightSelector: [{ type: core.Input, args: ['hljsContent',] }]
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
            { type: core.NgModule, args: [{
                        declarations: [ContentDirective],
                        imports: [],
                        exports: [ContentDirective]
                    },] }
        ];
        return AngularHighlightJsModule;
    }());

    exports.AngularHighlightJsModule = AngularHighlightJsModule;
    exports.ContentDirective = ContentDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-highlight-js.umd.js.map
