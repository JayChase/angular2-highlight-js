import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DemoComponent } from './demo.component';

import { HighlightJsModule, HighlightJsService } from '../src/highlight-js.module';

import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        //A2 stuff
        BrowserModule,
        FormsModule,
        //src module
        HighlightJsModule,
        //material modules
       MaterialModule.forRoot()
    ],
    providers: [
        HighlightJsService
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }