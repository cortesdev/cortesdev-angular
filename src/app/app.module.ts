import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { headerComponent } from './modules/header/app.headerComponent';
import { navComponent } from './modules/nav/app.navComponent';
import { footerComponent } from './modules/footer/app.footerComponent';
import { typerComponent } from './modules/typer/app.typerComponent';

import { contentAreaComponent } from './views/contentArea/app.contentAreaComponent';
import { contactComponent } from './views/contact/app.contactComponent';
import { loaderComponent } from './views/loader/app.loaderComponent';
import { aboutComponent } from './views/about/app.aboutComponent';

import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InlineSVGModule,
    HttpModule,
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
    aboutComponent,
    typerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
