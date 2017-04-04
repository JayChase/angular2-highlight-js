"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighlightJsContentDirective = (function () {
    function HighlightJsContentDirective(elementRef) {
        this.elementRef = elementRef;
    }
    HighlightJsContentDirective.prototype.ngOnInit = function () {
        if (this.useBr) {
            hljs.configure({ useBR: true });
        }
    };
    HighlightJsContentDirective.prototype.ngAfterViewChecked = function () {
        var selector = this.highlightSelector || 'code';
        if (this.elementRef.nativeElement.innerHTML) {
            var snippets = this.elementRef.nativeElement.querySelectorAll(selector);
            for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
                var snippet = snippets_1[_i];
                hljs.highlightBlock(snippet);
            }
        }
    };
    return HighlightJsContentDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HighlightJsContentDirective.prototype, "useBr", void 0);
__decorate([
    core_1.Input('highlight-js-content'),
    __metadata("design:type", String)
], HighlightJsContentDirective.prototype, "highlightSelector", void 0);
HighlightJsContentDirective = __decorate([
    core_1.Directive({ selector: '[highlight-js-content]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighlightJsContentDirective);
exports.HighlightJsContentDirective = HighlightJsContentDirective;
//# sourceMappingURL=highlight-js-content.directive.js.map