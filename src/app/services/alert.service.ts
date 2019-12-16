import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(
        private toastController: ToastController,
        private alertCtrl: AlertController,
    ) { }


    showAlertAuthFailed(message: string) {
        this.alertCtrl
            .create({
                header: 'Authentication failed',
                message: message,
                buttons: ['Okay']
            })
            .then(alertEl => alertEl.present());
    }
}
