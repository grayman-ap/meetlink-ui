import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetlink-portal';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  isSignupRoute(): boolean {
    return this.activatedRoute.firstChild?.snapshot.routeConfig?.path === 'signup';
  }
}
