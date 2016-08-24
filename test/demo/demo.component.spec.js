"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var testing_1 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
var highlight_js_service_1 = require('../../src/highlight-js.service');
var MockHighlightJsService = (function (_super) {
    __extends(MockHighlightJsService, _super);
    function MockHighlightJsService() {
        _super.apply(this, arguments);
    }
    MockHighlightJsService.prototype.highlight = function (codeBlock, useBr) {
    };
    return MockHighlightJsService;
}(highlight_js_service_1.HighlightJsService));
describe('demo component', function () {
    var mockHighlightJsService;
    beforeEach(function () {
        mockHighlightJsService = new MockHighlightJsService();
        spyOn(mockHighlightJsService, 'highlight');
        window.hljs = mockHighlightJsService;
        testing_1.TestBed.configureTestingModule({
            declarations: [
                demo_component_1.DemoComponent
            ],
            providers: [
                core_1.provide(highlight_js_service_1.HighlightJsService, { useValue: mockHighlightJsService })
            ]
        });
        testing_1.TestBed.compileComponents();
    });
    it('should build without error', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).not.toBeNull();
        });
    }));
    it('should call HighlightJsService highlight when highlight button clicked', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            var compiled = fixture.debugElement.nativeElement;
            compiled.querySelector('#btnHighlight').click();
            fixture.detectChanges();
            expect(mockHighlightJsService.highlight).toHaveBeenCalled();
        });
    }));
    it('should call set sampleContent when add content button clicked', testing_1.async(function () {
        expect(true).toBe(true);
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(demo_component_1.DemoComponent);
            var compiled = fixture.debugElement.nativeElement;
            compiled.querySelector('#btnAddContent').click();
            fixture.detectChanges();
            expect(fixture.componentInstance.sampleContent).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=demo.component.spec.js.map