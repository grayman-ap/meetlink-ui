import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  isActiveRoute: boolean = false;
  uid: string | null = null;

  constructor(private readonly route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.uid = params["uid"];
      },
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects || event.url;
        this.isActiveRoute = currentUrl.startsWith('/employees');
      }
    });
  }
}
