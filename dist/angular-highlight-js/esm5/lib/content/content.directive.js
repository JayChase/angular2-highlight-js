/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
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
                        for (var snippets_2 = tslib_1.__values(snippets_1), snippets_2_1 = snippets_2.next(); !snippets_2_1.done; snippets_2_1 = snippets_2.next()) {
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
export { ContentDirective };
if (false) {
    /** @type {?} */
    ContentDirective.prototype.options;
    /** @type {?} */
    ContentDirective.prototype.highlightSelector;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype.done;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1oaWdobGlnaHQtanMvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxJQUFJLE1BQU0sNEJBQTRCLENBQUM7QUFFOUM7SUFRRSwwQkFBb0IsVUFBc0IsRUFBVSxJQUFZO1FBQTVDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBRnhELFNBQUksR0FBRyxLQUFLLENBQUM7SUFFOEMsQ0FBQzs7Ozs7SUFFcEUsc0NBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBQ3RDLDhDQUE4QztRQUM5QyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELDZDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7O2dCQUNSLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksTUFBTTtZQUVqRCxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDM0M7O29CQUNNLFVBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDN0QsUUFBUSxDQUNUO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7Z0JBQUM7Ozt3QkFDMUIsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFVBQVEsQ0FBQSxrQ0FBQSx3REFBRTs0QkFBM0IsSUFBTSxPQUFPLHFCQUFBOzRCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUM5Qjs7Ozs7Ozs7O2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkFYQyxVQUFVO2dCQUVWLE1BQU07OzswQkFXTCxLQUFLO29DQUNMLEtBQUssU0FBQyxhQUFhOztJQWlDdEIsdUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQW5DWSxnQkFBZ0I7OztJQUMzQixtQ0FBMkI7O0lBQzNCLDZDQUFnRDs7Ozs7SUFDaEQsZ0NBQXFCOzs7OztJQUVULHNDQUE4Qjs7Ozs7SUFBRSxnQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPcHRpb25zIH0gZnJvbSAnaGlnaGxpZ2h0LmpzJztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hsanNDb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zO1xuICBASW5wdXQoJ2hsanNDb250ZW50JykgaGlnaGxpZ2h0U2VsZWN0b3I6IHN0cmluZztcbiAgcHJpdmF0ZSBkb25lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIGlmIChzaW1wbGVDaGFuZ2VzWydvcHRpb25zJ10gJiYgdGhpcy5vcHRpb25zKSB7XG4gICAgICBobGpzLmNvbmZpZ3VyZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmhpZ2hsaWdodFNlbGVjdG9yIHx8ICdjb2RlJztcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgJiZcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvclxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHNuaXBwZXRzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBzZWxlY3RvclxuICAgICAgICApO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3Qgc25pcHBldCBvZiBzbmlwcGV0cykge1xuICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhzbmlwcGV0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=