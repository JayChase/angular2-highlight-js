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
testing_1.describe('HighlightJsService', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
    });
    testing_1.beforeEachProviders(function () { return [highlight_js_service_1.HighlightJsService]; });
    testing_1.describe('highlight', function () {
        testing_1.it('should call hljs.highlight with supplied arg', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
            var arg = {};
            highlightJsService.highlight(arg);
            testing_1.expect(mockHljs.highlightBlock).toHaveBeenCalledWith(arg);
        }));
        testing_1.it('should not call hljs.configure if no useBR param supplied', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
            var arg = {};
            highlightJsService.highlight(arg);
            testing_1.expect(mockHljs.configure).not.toHaveBeenCalled();
        }));
        testing_1.it('should call hljs.configure if useBR param true', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
            var arg = {};
            highlightJsService.highlight(arg, true);
            testing_1.expect(mockHljs.configure).toHaveBeenCalled();
        }));
        testing_1.it('should not call hljs.configure if useBR param false', testing_1.inject([highlight_js_service_1.HighlightJsService], function (highlightJsService) {
            var arg = {};
            highlightJsService.highlight(arg, false);
            testing_1.expect(mockHljs.configure).not.toHaveBeenCalled();
        }));
    });
});
//# sourceMappingURL=highlight-js.service.test.js.map