import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  connection:boolean = true;


  constructor(
      private network: Network,
      private router: Router
  ) {
  }

  onDisconnect(){
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.router.navigateByUrl('connection-needed').catch();
      this.connection = false;

    });
  }



}
