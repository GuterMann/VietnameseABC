import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../statemanagement/models/ApplicationState';
import { getSelectedSidebarItemId, getSelectedSidebarItemName } from '../../statemanagement/selectors/sidebar.selectors';

@Component({ selector: 'app-navbar', templateUrl: './navbar.component.html', styleUrls: ['./navbar.component.css'] })
export class NavbarComponent implements OnInit {

  selectedSidebarMenuNumber$: Observable<number>;
  selectedSidebarMenuName$: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
    this.selectedSidebarMenuNumber$ = this.store.select(getSelectedSidebarItemId);
    this.selectedSidebarMenuName$ = this.store.select(getSelectedSidebarItemName);
  }

  ngOnInit() { }

}
