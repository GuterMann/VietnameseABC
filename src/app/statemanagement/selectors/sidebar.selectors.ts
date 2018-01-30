import { ApplicationState } from '../models/ApplicationState';
import { LayoutState } from '../models/LayoutState';

export function getSelectedSidebarItemId(state: ApplicationState): number {
    const result = state.amount;
    return result;
  }

export function getSelectedSidebarItemName(state: ApplicationState): string {
    const result = state.layout.sidebarSelectedItem;
    return result;
  }
