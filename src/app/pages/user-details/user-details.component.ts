import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
isActiveRoute: boolean | false | undefined;
uid: string | null = null;

constructor(private readonly route: ActivatedRoute, private router: Router)  {}

ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
       this.uid = params["uid"]
      }
    });
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        const currentUrl = event.urlAfterRedirects || event.url;
        this.isActiveRoute = currentUrl.startsWith('/users')
      }
    })
}
}
