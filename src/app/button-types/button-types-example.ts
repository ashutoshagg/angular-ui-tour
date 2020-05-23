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
