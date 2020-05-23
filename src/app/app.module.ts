import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DemoMaterialModule } from 'src/main';

import { MatNativeDateModule } from '@angular/material';


import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


import { ButtonTypesExample } from './button-types/button-types-example';
import { MyOverlayComponent } from './my-overlay/my-overlay.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule
  ],
  entryComponents: [ButtonTypesExample],
  declarations: [ButtonTypesExample, MyOverlayComponent],
  bootstrap: [ButtonTypesExample],
  providers: []
})
export class AppModule { }
