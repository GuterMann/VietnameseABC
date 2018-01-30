import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { StoreModule } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { reducers } from './statemanagement/reducers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material.module';

import { DictionaryModule } from './dictionary/dictionary.module';
import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    DictionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
