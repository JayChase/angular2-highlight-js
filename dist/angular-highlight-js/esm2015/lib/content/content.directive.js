/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
export class ContentDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWhpZ2hsaWdodC1qcy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50L2NvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sSUFBSSxNQUFNLDRCQUE0QixDQUFDO0FBSzlDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSzNCLFlBQW9CLFVBQXNCLEVBQVUsSUFBWTtRQUE1QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUZ4RCxTQUFJLEdBQUcsS0FBSyxDQUFDO0lBRThDLENBQUM7Ozs7O0lBRXBFLFdBQVcsQ0FBQyxhQUE0QjtRQUN0Qyw4Q0FBOEM7UUFDOUMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7O2tCQUNSLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksTUFBTTtZQUVqRCxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDM0M7O3NCQUNNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDN0QsUUFBUSxDQUNUO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUMvQixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTt3QkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDOUI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFYQyxVQUFVO1lBRVYsTUFBTTs7O3NCQVdMLEtBQUs7Z0NBQ0wsS0FBSyxTQUFDLGFBQWE7Ozs7SUFEcEIsbUNBQTJCOztJQUMzQiw2Q0FBZ0Q7Ozs7O0lBQ2hELGdDQUFxQjs7Ozs7SUFFVCxzQ0FBOEI7Ozs7O0lBQUUsZ0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJ2hpZ2hsaWdodC5qcyc7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tobGpzQ29udGVudF0nXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBvcHRpb25zOiBJT3B0aW9ucztcbiAgQElucHV0KCdobGpzQ29udGVudCcpIGhpZ2hsaWdodFNlbGVjdG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgZG9uZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoc2ltcGxlQ2hhbmdlc1snb3B0aW9ucyddICYmIHRoaXMub3B0aW9ucykge1xuICAgICAgaGxqcy5jb25maWd1cmUodGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5oaWdobGlnaHRTZWxlY3RvciB8fCAnY29kZSc7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MICYmXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzbmlwcGV0cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNuaXBwZXQgb2Ygc25pcHBldHMpIHtcbiAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soc25pcHBldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19