import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HighlightJsContentDirective } from './highlight-js-content.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
    ],
    declarations: [
        HighlightJsContentDirective
    ],
    exports: [
        HighlightJsContentDirective
    ]
})
export class HighlightJsModule { }

export { HighlightJsService } from './highlight-js.service';