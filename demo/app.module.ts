import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';

import { HighlightJsModule } from '../src/highlight-js.module';
import { HighlightJsService } from '../src/highlight-js.service';

import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        HighlightJsModule
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