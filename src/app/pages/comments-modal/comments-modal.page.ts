import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PostsService} from '../../services/posts.service';
import {Comment} from '../../interfaces/comment';
import {Content} from "../../interfaces/content";
import {NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'app-comments-modal',
    templateUrl: './comments-modal.page.html',
    styleUrls: ['./comments-modal.page.scss'],
})
export class CommentsModalPage implements OnInit {
    commentsPost = false;
    idPost:number;
    modelId: number;
    posts: Content[];

    constructor(
        private modalController: ModalController,
        private navParams: NavParams,
        private postsService: PostsService,
        private router: Router
    ) {
        this.modelId = this.navParams.data.paramID;
        this.idPost = this.modelId;
    }

    ngOnInit() {}

    ionViewWillEnter(){
        this.getFilteredPost();
    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

    getFilteredPost(){
        this.postsService.getPosts().subscribe(posts=> {
            this.posts = posts.data.filter(post => {
                return post.id == this.modelId;
            })
        })

    }


    visitProfile(id: number) {
        if (id) {
            console.log(id);
            let navigationExtras: NavigationExtras = {
                queryParams: {idUser: id}
            };
            if (id == 1) {//renderlo dinamico in base all'utente loggato,ora quello loggato ha id=1
                this.router.navigate(['home/profile'], navigationExtras);
            } else {
                this.router.navigate(['home/profiles'], navigationExtras);
            }
        }
    }
}


