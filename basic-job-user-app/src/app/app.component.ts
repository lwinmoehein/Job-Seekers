import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { getToken } from './constants/credentials';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'basic-job';
  navLinks: any[];
  activeLinkIndex = 0;
  background: ThemePalette = 'primary';
  isLoggedIn:boolean=getToken();

  constructor(private router: Router) {

    this.navLinks = [
      {
        label: 'Jobs',
        link: './',
        index: 0
      },
      {
        label: 'profile',
        link: './profile',
        index: 1
      }
    ];

    router.events.subscribe((val) => {
       this.isLoggedIn=getToken();
    });
  }

  ngOnInit(): void {
    this.isLoggedIn=getToken();
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }


}
