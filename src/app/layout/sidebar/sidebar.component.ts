import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidebarRouteInfo, SidebarRoutes } from './SidebarRouteInfo';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AmountChangeAction } from '../../statemanagement/actions/amount.actions';
import {SidebarSelectedItemChangedAction} from '../../statemanagement/actions/layout.actions';
import { ApplicationState } from '../../statemanagement/models/ApplicationState';

declare const $: any;

@Component({ selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css'] })
export class SidebarComponent implements OnInit {
  menuItems: SidebarRouteInfo[];

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.menuItems = SidebarRoutes.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  menuItemClicked($event): void {
    if ($event.hasOwnProperty('path')) {
      let resultName = 'Dashboard';
      if ($event.path === 'user-profile') {
        resultName = 'UserProfile';
      } else if ($event.path === 'dictionary') {
        resultName = 'Dictionary';
      }
      this.store.dispatch(new SidebarSelectedItemChangedAction(resultName));
    }
  }

}
