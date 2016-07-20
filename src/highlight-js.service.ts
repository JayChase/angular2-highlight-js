import { Injectable, ElementRef } from '@angular/core';

declare var hljs: any;

@Injectable()
export class HighlightJsService {

    constructor() { }

    highlight(codeBlock: any, useBr?: boolean): void {
        if (useBr) {
            hljs.configure({ useBR: true });
        }

        hljs.highlightBlock(codeBlock);
    }
}