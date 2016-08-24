"use strict";
var testing_1 = require('@angular/core/testing');
var highlight_js_service_1 = require('../../src/highlight-js.service');
var MockHljs = (function () {
    function MockHljs() {
    }
    MockHljs.prototype.configure = function (args) {
    };
    MockHljs.prototype.highlightBlock = function (args) {
    };
    return MockHljs;
}());
describe('HighlightJsService', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
        testing_1.TestBed.configureTestingModule({
            providers: [
                highlight_js_service_1.HighlightJsService
            ]
        });
    });
    it('should call hljs.highlight with supplied arg', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
        var arg = {};
        highlightJsService.highlight(arg);
        expect(mockHljs.highlightBlock).toHaveBeenCalledWith(arg);
    }));
    it('should not call hljs.configure if no useBR param supplied', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
        var arg = {};
        highlightJsService.highlight(arg);
        expect(mockHljs.configure).not.toHaveBeenCalled();
    }));
    it('should call hljs.configure if useBR param true', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
        var arg = {};
        highlightJsService.highlight(arg, true);
        expect(mockHljs.configure).toHaveBeenCalled();
    }));
    it('should not call hljs.configure if useBR param false', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
        var arg = {};
        highlightJsService.highlight(arg, false);
        expect(mockHljs.configure).not.toHaveBeenCalled();
    }));
});
//# sourceMappingURL=highlight-js.service.test.js.map