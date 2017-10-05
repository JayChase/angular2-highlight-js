"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighlightJsService = (function () {
    function HighlightJsService() {
    }
    HighlightJsService.prototype.highlight = function (codeBlock, useBr) {
        if (useBr) {
            hljs.configure({ useBR: true });
        }
        hljs.highlightBlock(codeBlock);
        hljs.lineNumbersBlock(codeBlock);
    };
    return HighlightJsService;
}());
HighlightJsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
HighlightJsService.ctorParameters = function () { return []; };
exports.HighlightJsService = HighlightJsService;
//# sourceMappingURL=highlight-js.service.js.map