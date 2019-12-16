import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateConfigService} from '../../services/translate-config.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    url = "../assets/ssLogo.png";
    title = "Settings";
    selectedLanguage: any;
    constructor(private http: HttpClient, private translateConfigService: TranslateConfigService) {
        /*this.selectedLanguage = this.translateConfigService.setLanguage('en')*/;
        /* this.selectedLanguage = 'en';*/
    }

    languageChanged(){
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }

    ngOnInit() {
    }

}
