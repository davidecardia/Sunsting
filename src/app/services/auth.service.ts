import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AlertService } from './alert.service';
import { AuthResponseData} from '../interfaces/auth-response-data';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authSource = new BehaviorSubject<boolean>(null);
    authState = this.authSource.asObservable();
    user = [];
    error: any;
    token: AuthResponseData;
    username: string;

    constructor(
        private http: HttpClient,
        private platform: Platform,
        private nativeStorage: NativeStorage,
        private router: Router,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private alertService: AlertService
    ) {}


    login(username: string, password: string) {
        const body = {
            username,
            password
        };
        const loginUrl = environment.loginUrl;
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
                loadingEl.present();
                this.http.post<AuthResponseData>(loginUrl, body).subscribe(
                    res => {
                        loadingEl.dismiss().catch();
                        this.storeData(res);
                        this.router.navigateByUrl('/home/dashboard');
                        console.log('Sei loggato');
                    },
                    err => {
                        loadingEl.dismiss().catch();
                        this.error = err;
                        console.log(err);
                        this.error = 'Accesso negato'; // add translate service
                        this.alertService.showAlertAuthFailed(this.error);
                    }
                );
            });
    }

    storeData(authData: AuthResponseData) {
        // tslint:disable-next-line:triple-equals
        if (this.checkDevice() === 'WEB') {
            sessionStorage.setItem('token', authData.token_type + ' ' + authData.access_token);
            sessionStorage.setItem('username', authData.username);
        } else {
            localStorage.setItem('username', authData.username);
            localStorage.setItem('token', authData.token_type + ' ' + authData.access_token);
            this.nativeStorage.setItem('username', authData.username).catch(() => {
                console.log('Cordova non avviabile!');
            });
        }
    }

    getToken(): string {
        if (this.checkDevice() === 'WEB') {
            return sessionStorage.getItem('token');
        } else {
            return localStorage.getItem('token');
        }
    }

    deleteData() {
        sessionStorage.clear();
        localStorage.clear();
        this.nativeStorage.clear().catch();
    }

    logout() {
        this.deleteData();
        this.isAuthenticated();
        this.router.navigateByUrl('/login').catch();
    }

    checkDevice(): string {
        if ((this.platform.is('android')) || (this.platform.is('ios'))) {
            return 'MOBILE';
        } else {
            return 'WEB';
        }
    }

    isAuthenticated(): boolean {
        if (!!((localStorage.getItem('token')) || (sessionStorage.getItem('token')))) {
            this.authSource.next(true);
            return true;
        } else {
            this.authSource.next(false);
            return false;
        }
    }

    getUsername() {
        if (this.checkDevice() === 'MOBILE') {
            return localStorage.getItem('username');
        } else if (this.checkDevice() === 'WEB') {
            return sessionStorage.getItem('username');
        } else {
            return;
        }
    }

} // END CLASS



