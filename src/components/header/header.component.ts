import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  HeaderIcons = [
    {
      id: 1,
      iconType: '../../assets/vector/settings.svg',
    },
    {
      id: 2,
      iconType: '../../assets/vector/theme.svg',
    },
    {
      id: 3,
      iconType: '../../assets/vector/notifications.svg',
      hasBadge: 'mat-raised-button color="primary" matBadge="8" matBadgePosition="before" matBadgeColor="accent"'
    },

  ]
}
