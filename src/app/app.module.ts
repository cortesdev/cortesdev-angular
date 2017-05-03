import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { contactComponent } from './contact/app.contactComponent';
import { loaderComponent } from './loader/app.loaderComponent';

 import { InlineSVGModule } from 'ng-inline-svg';




@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    contactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InlineSVGModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
