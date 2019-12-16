import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {VersionAppService} from "../services/version-app.service";

@Injectable({
  providedIn: 'root'
})
export class VersionGuard implements CanActivate  {

  constructor(
      private versionAppService: VersionAppService,
      private router: Router
  ) {}


  canActivate(): boolean {
    if (this.versionAppService.oldVersion) {
      this.router.navigate(['update']).catch();
      return false;
    }
    return true;
  }

}
