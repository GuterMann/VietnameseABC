export interface SidebarRouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const SidebarRoutes: SidebarRouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: 'dictionary', title: 'Dictionary', icon: 'book', class: ''},
    { path: 'table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: 'typography', title: 'Typography',  icon: 'library_books', class: '' },
    { path: 'icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: 'maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Notifications',  icon: 'notifications', class: '' },
];
