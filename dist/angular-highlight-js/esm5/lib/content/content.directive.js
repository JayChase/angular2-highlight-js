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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWhpZ2hsaWdodC1qcy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50L2NvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQztBQUU5QztJQVFFLDBCQUFvQixVQUFzQixFQUFVLElBQVk7UUFBNUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFGeEQsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUU4QyxDQUFDOzs7OztJQUVwRSxzQ0FBVzs7OztJQUFYLFVBQVksYUFBNEI7UUFDdEMsOENBQThDO1FBQzlDLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTs7Z0JBQ1IsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNO1lBRWpELElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUztnQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUMzQzs7b0JBQ00sVUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUM3RCxRQUFRLENBQ1Q7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztnQkFBQzs7O3dCQUMxQixLQUFzQixJQUFBLGFBQUEsaUJBQUEsVUFBUSxDQUFBLGtDQUFBLHdEQUFFOzRCQUEzQixJQUFNLE9BQU8scUJBQUE7NEJBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQzlCOzs7Ozs7Ozs7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQVhDLFVBQVU7Z0JBRVYsTUFBTTs7OzBCQVdMLEtBQUs7b0NBQ0wsS0FBSyxTQUFDLGFBQWE7O0lBaUN0Qix1QkFBQztDQUFBLEFBdENELElBc0NDO1NBbkNZLGdCQUFnQjs7O0lBQzNCLG1DQUEyQjs7SUFDM0IsNkNBQWdEOzs7OztJQUNoRCxnQ0FBcUI7Ozs7O0lBRVQsc0NBQThCOzs7OztJQUFFLGdDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICdoaWdobGlnaHQuanMnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGxqc0NvbnRlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgb3B0aW9uczogSU9wdGlvbnM7XG4gIEBJbnB1dCgnaGxqc0NvbnRlbnQnKSBoaWdobGlnaHRTZWxlY3Rvcjogc3RyaW5nO1xuICBwcml2YXRlIGRvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKHNpbXBsZUNoYW5nZXNbJ29wdGlvbnMnXSAmJiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGhsanMuY29uZmlndXJlKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuaGlnaGxpZ2h0U2VsZWN0b3IgfHwgJ2NvZGUnO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgc25pcHBldHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBzbmlwcGV0IG9mIHNuaXBwZXRzKSB7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHNuaXBwZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==