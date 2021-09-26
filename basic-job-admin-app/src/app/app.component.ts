import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { getToken } from './constants/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic-job-admin-app';
  navLinks: any[];
  activeLinkIndex = 0;
  background: ThemePalette = 'primary';
  isLoggedIn = getToken;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Jobs',
        link: './',
        index: 0
      }, {
        label: 'users',
        link: './users',
        index: 1
      },
      {
        label:'analytics',
        link:'./analytics',
        index:2
      },
      {
        label:'profile',
        link:'./profile',
        index:3
      }
    ];

    router.events.subscribe((val) => {
      this.isLoggedIn=getToken();
   });
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }


}
