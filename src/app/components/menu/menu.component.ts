import {Component, NgZone, OnInit} from '@angular/core';
import { Router, RouterEvent} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  selectedPath = '';
  isLoggedIn: boolean;


  public appPages = [
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      icon: 'list',
      status: this.isLoggedIn
    },
    {
      title: 'Profile',
      url: '/home/profile',
      icon: 'person',
      status: this.isLoggedIn
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person',
      status: this.isLoggedIn
    },
    {
      title: 'Advertising',
      url: '/home/advertising',
      icon: 'analytics',
      status: true
    },
    {
      title: 'Features',
      url: '/home/features',
      icon: 'journal',
      status: true
    },
    {
      title: 'Inspired to',
      url: '/home/inspired-to',
      icon: 'trophy',
      status: true
    }

  ];




  constructor(
      private router: Router,
      private authService: AuthService,
      private menuCtrl: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.authService.authState.subscribe(auth => {
      //do what ever needs doing when data changes
      this.isLoggedIn = auth;
      for (let p of this.appPages){
        p.status = this.isLoggedIn;
      }
    });

  }

  onSubmit(){
    this.menuCtrl.close();
    this.authService.logout();
  }








}// END CLASS
