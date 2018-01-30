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
import { DictionaryComponent } from './dictionary/dictionary.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    UserprofileComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { pathMatch: 'full', path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-profile', component: UserprofileComponent },
      { path: 'dictionary', component: DictionaryComponent},
      { path: '**', redirectTo: 'dashboard' , pathMatch: 'full'}
    ]),
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
