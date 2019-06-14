import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sampleContent = `
  <pre>
     <code class="typescript highlight">
         class Greeter {
             constructor(public greeting: string) { }
             greet() {
                 return "hello world";
             }
         };
     </code>
 </pre>
 <pre>
     <code class="javascript highlight">
         alert('Hello, World!');
     </code>
 </pre>
 `;

  dynamicContent: string;

  addContent() {
    this.dynamicContent = this.sampleContent;
  }
}
