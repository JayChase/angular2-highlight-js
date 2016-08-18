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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var highlight_js_content_directive_1 = require('./highlight-js-content.directive');
var HighlightJsModule = (function () {
    function HighlightJsModule() {
    }
    HighlightJsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [],
            declarations: [
                highlight_js_content_directive_1.HighlightJsContentDirective
            ],
            exports: [
                highlight_js_content_directive_1.HighlightJsContentDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HighlightJsModule);
    return HighlightJsModule;
}());
exports.HighlightJsModule = HighlightJsModule;
var highlight_js_service_1 = require('./highlight-js.service');
exports.HighlightJsService = highlight_js_service_1.HighlightJsService;
//# sourceMappingURL=highlight-js.module.js.map