import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { contactComponent } from './contact/app.contactComponent';
import { loaderComponent } from './loader/app.loaderComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InlineSVGModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'about',
        component: aboutComponent
      },
      {
        path:'contact',
        component: contactComponent
      },
      {
        path:'',
        component: contentAreaComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    contactComponent,
    aboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
