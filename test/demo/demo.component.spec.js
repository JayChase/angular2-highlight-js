"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var card_1 = require('@angular2-material/card');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
var highlight_js_module_1 = require('../../src/highlight-js.module');
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
        testing_1.TestBed.configureTestingModule({
            imports: [
                card_1.MdCardModule,
                toolbar_1.MdToolbarModule,
                button_1.MdButtonModule,
                input_1.MdInputModule,
                highlight_js_module_1.HighlightJsModule
            ],
            declarations: [
                demo_component_1.DemoComponent
            ],
            providers: [
                {
                    provide: highlight_js_service_1.HighlightJsService,
                    useClass: mockHighlightJsService
                }
            ]
        });
    });
    // it('should build without error', async(() => {
    //     TestBed.compileComponents().then(() => {
    //         var fixture = TestBed.createComponent(DemoComponent);
    //         fixture.detectChanges();
    //         var compiled = fixture.debugElement.nativeElement;
    //         expect(compiled).not.toBeNull();
    //     });
    // }));
});
//# sourceMappingURL=demo.component.spec.js.map