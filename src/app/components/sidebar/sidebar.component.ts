import { Component } from '@angular/core';
import { SideBarItem } from './sidebarItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
[x: string]: any;
Items = SideBarItem
}
