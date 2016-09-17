import { Component } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { HighlightJsService } from '../../src/highlight-js.service';

class MockHljs {
    configure(args: any) {

    }

    highlightBlock(args: any) {
    }
}

describe('HighlightJsService', () => {
    let mockHljs: MockHljs;

    beforeEach(() => {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        (<any>window).hljs = mockHljs;

        TestBed.configureTestingModule({
            providers: [
                HighlightJsService
            ]
        });
    });

    it('should call hljs.highlight with supplied arg', inject([HighlightJsService], (highlightJsService: HighlightJsService) => {
        let arg = {};

        highlightJsService.highlight(arg);

        expect(mockHljs.highlightBlock).toHaveBeenCalledWith(arg);
    }));

    it('should not call hljs.configure if no useBR param supplied', inject([HighlightJsService], (highlightJsService: HighlightJsService) => {
        let arg = {};

        highlightJsService.highlight(arg);

        expect(mockHljs.configure).not.toHaveBeenCalled();
    }));

    it('should call hljs.configure if useBR param true', inject([HighlightJsService], (highlightJsService: HighlightJsService) => {
        let arg = {};

        highlightJsService.highlight(arg, true);

        expect(mockHljs.configure).toHaveBeenCalled();
    }));

    it('should not call hljs.configure if useBR param false', inject([HighlightJsService], (highlightJsService: HighlightJsService) => {
        let arg = {};

        highlightJsService.highlight(arg, false);

        expect(mockHljs.configure).not.toHaveBeenCalled();
    }));

});