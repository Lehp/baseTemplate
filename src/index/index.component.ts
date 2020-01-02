"use strict";

import { Component } from '@angular/core';
import template from "./index.component.pug"

@Component({
  selector: 'index-component',
  template: template(),
  styleUrls: ['./index.component.styl']
})
export class IndexComponent {
  constructor() { }

  ngOnInit() {
  }
}
