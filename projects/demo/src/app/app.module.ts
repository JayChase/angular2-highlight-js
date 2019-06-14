import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularHighlightJsModule } from 'angular-highlight-js';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import { AppComponent } from './app.component';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AngularHighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
