import { Injectable } from '@angular/core';
import {AppVersion} from "@ionic-native/app-version/ngx";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class VersionAppService {

    versionCodeList =
        [
            "0.9.0",
            '0.9.1',
            '0.9.3',
            '0.9.4'
        ];

    oldVersion = false;

    constructor(private appVersion: AppVersion, private router: Router) { }


    getVersionNumber(){
        // return this.appVersion.getVersionNumber();

        //test con valore casuale non presente in lista
        return "0.9.0";
    }

    verifyUpdates(){
        let arr= this.versionCodeList.filter((code)=>{
            return code == this.getVersionNumber();
        });

        if(arr.length == 0){
            this.oldVersion = true;
            this.router.navigate(['update']);
        }
    }



}
