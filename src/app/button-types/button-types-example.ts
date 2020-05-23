import {Component, AfterViewInit} from '@angular/core';

import { OverlayServiceService } from '../services/overlay-service.service'
/**
 * @title Button varieties
 */
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample implements AfterViewInit {
   isActive1 = true;
   isActive2 = false;

  constructor(private service: OverlayServiceService) {
  }

  ngAfterViewInit() {
    this.service.showOverlay(1);
  }

  restartOnboarding() {
    this.service.showOverlay(1);
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */