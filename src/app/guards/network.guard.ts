import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import {NetworkService} from "../services/network.service";

@Injectable({
  providedIn: 'root'
})
export class NetworkGuard implements CanActivate {

  constructor(
      private network: NetworkService,
      private router: Router
  ) {
    console.log("Connessione : " + this.network.connection)
  }

  canActivate(): boolean {
    if (!this.network.connection) {

      this.router.navigate(['login']).catch();
      return false;
    }
    return true;
  }

}
