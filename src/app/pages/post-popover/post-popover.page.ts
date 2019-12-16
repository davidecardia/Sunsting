import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, PopoverController} from '@ionic/angular';
import { NavParams} from "@ionic/angular";
import {PostsService} from "../../services/posts.service";
import {AuthResponseData} from "../../interfaces/auth-response-data";
import {Router} from "@angular/router";
import {CommentsModalPage} from "../comments-modal/comments-modal.page";
import {UpdatePostModalPage} from "../update-post-modal/update-post-modal.page";


@Component({
    selector: 'app-post-popover',
    templateUrl: './post-popover.page.html',
    styleUrls: ['./post-popover.page.scss'],
})
export class PostPopoverPage implements OnInit {

    modelId: number;

    array:any;
    dataReturned: any;

    constructor(
        private navParams: NavParams,
        private postsService: PostsService,
        private popoverCtrl: PopoverController,
        private loadCtrl : LoadingController,
        private modalCtrl: ModalController,
        private router : Router
    ) {
        this.modelId = this.navParams.data.paramID;
        console.log(this.modelId);
    }

    ngOnInit() {
    }

    async closePopover() {
        await this.popoverCtrl.dismiss();
    }

    deletePost() {
        this.loadCtrl
            .create({ keyboardClose: true, message: 'Deleting post..' })
            .then(loadingEl => {
                loadingEl.present();
                this.postsService.deletePost(this.modelId).subscribe(
                    res => {
                        loadingEl.dismiss().catch();
                        this.closePopover();
                        this.router.navigateByUrl('/home/dashboard');
                    },
                    err => {
                        loadingEl.dismiss().catch();
                        console.log(err)
                    }
                )
            });
    }

    editPost(){
        this.openModal();
    }



    async openModal() {
        const modal = await this.modalCtrl.create({
            component: UpdatePostModalPage,
            componentProps: {
                "paramID": this.modelId,
                "paramTitle": "Test Title"
            }
        });

        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });
        return await modal.present();
    }




}
