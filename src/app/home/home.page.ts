import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CreatePostPage} from "../pages/create-post/create-post.page";
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private isLoggedIn: boolean;

    constructor(private authService: AuthService,
                private modalController: ModalController,
                private router: Router) {
        this.isLoggedIn = this.authService.isAuthenticated();
    }

    async createPost() {
        const modal = await this.modalController .create({
            component: CreatePostPage
        });
        return await modal.present();
    }

    visitProfile(){
        this.router.navigateByUrl('home/profile');
    }

    // dashBoardClick(){
    //     this.dashBoardClicked.emit(true);
    // }




}
