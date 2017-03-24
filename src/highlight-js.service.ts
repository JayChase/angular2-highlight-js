import { Injectable, ElementRef } from '@angular/core';

declare var hljs: any;

@Injectable()
export class HighlightJsService {

    constructor() { }

    highlight(codeBlock: any, useBr?: boolean, tabReplace?: boolean): void {
        if (useBr) {
            hljs.configure({ useBR: true });
        }
        if (tabReplace) {
            hljs.configure({ tabReplace: '  ' });
        }
        hljs.highlightBlock(codeBlock);
    }
}
