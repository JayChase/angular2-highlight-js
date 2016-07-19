import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { DemoComponent } from './demo.component';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [],
  directives: [ DemoComponent ]
})

export class AppComponent implements OnInit {
  title: string = 'highlight.js directive for Angular Demo';

  constructor() {

  }

  ngOnInit() {
   
  }
}
