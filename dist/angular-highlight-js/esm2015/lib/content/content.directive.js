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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1oaWdobGlnaHQtanMvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQztBQUs5QyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUszQixZQUFvQixVQUFzQixFQUFVLElBQVk7UUFBNUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFGeEQsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUU4QyxDQUFDOzs7OztJQUVwRSxXQUFXLENBQUMsYUFBNEI7UUFDdEMsOENBQThDO1FBQzlDLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOztrQkFDUixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLE1BQU07WUFFakQsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQzNDOztzQkFDTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQzdELFFBQVEsQ0FDVDtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQjs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDL0IsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzlCO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBWEMsVUFBVTtZQUVWLE1BQU07OztzQkFXTCxLQUFLO2dDQUNMLEtBQUssU0FBQyxhQUFhOzs7O0lBRHBCLG1DQUEyQjs7SUFDM0IsNkNBQWdEOzs7OztJQUNoRCxnQ0FBcUI7Ozs7O0lBRVQsc0NBQThCOzs7OztJQUFFLGdDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU9wdGlvbnMgfSBmcm9tICdoaWdobGlnaHQuanMnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGxqc0NvbnRlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgb3B0aW9uczogSU9wdGlvbnM7XG4gIEBJbnB1dCgnaGxqc0NvbnRlbnQnKSBoaWdobGlnaHRTZWxlY3Rvcjogc3RyaW5nO1xuICBwcml2YXRlIGRvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKHNpbXBsZUNoYW5nZXNbJ29wdGlvbnMnXSAmJiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGhsanMuY29uZmlndXJlKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuaGlnaGxpZ2h0U2VsZWN0b3IgfHwgJ2NvZGUnO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgc25pcHBldHMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBzbmlwcGV0IG9mIHNuaXBwZXRzKSB7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHNuaXBwZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==