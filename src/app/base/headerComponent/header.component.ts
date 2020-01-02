"use strict";

import { Component } from '@angular/core';
import template from './header.component.pug';
import htmlTemplate from 'html-loader!./test.html'

@Component({
  selector: 'header-component',
  template: template(),
})
export class HeaderComponent {

}
