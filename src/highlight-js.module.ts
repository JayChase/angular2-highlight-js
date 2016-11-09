import { NgModule } from '@angular/core';


import { HighlightJsContentDirective } from './highlight-js-content.directive';

@NgModule({
    imports: [
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