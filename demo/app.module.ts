import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DemoComponent } from './demo.component';

import { HighlightJsModule, HighlightJsService } from '../src/highlight-js.module';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
    imports: [
        //A2 stuff
        BrowserModule,
        FormsModule,
        //src module
        HighlightJsModule,
        //material modules
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule
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