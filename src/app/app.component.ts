import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NetworkService} from "./services/network.service";
import {VersionAppService} from "./services/version-app.service";
import {HttpClient} from '@angular/common/http';
import {TranslateConfigService} from './services/translate-config.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent{
    title: string;
    selectedLanguage: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private networkService: NetworkService,
        private http: HttpClient,
        private translateConfigService: TranslateConfigService,
        private versionAppService: VersionAppService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.networkService.onDisconnect();

            this.selectedLanguage = this.translateConfigService.setLanguage('en');
            console.log(this.authService.getToken());
            this.versionAppService.verifyUpdates();
        });

    }


}
