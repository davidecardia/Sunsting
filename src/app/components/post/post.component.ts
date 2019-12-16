import { Component, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { NavigationExtras, Router } from "@angular/router";
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { CommentsModalPage } from '../../pages/comments-modal/comments-modal.page';
import { Content } from "../../interfaces/content";
import { TopicService } from '../../services/topic.service';
import { PostPopoverPage } from "../../pages/post-popover/post-popover.page";
import { LikesService } from "../../services/likes.service";
import { LikePost } from "../../interfaces/like-post";
import { CommentsComponent } from "../comments/comments.component";
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() posts: Content[];
    commentsPost = false;
    idPost: number;
    currentUsername: string;
    dataReturned: any;
    topic = 'post.topic.name';

    constructor(
        private postsService: PostsService,
        private authService: AuthService,
        private router: Router,
        private loadCtrl: LoadingController,
        private modalCtrl: ModalController,
        private topicService: TopicService,
        private likesService: LikesService,
        public popoverController: PopoverController
    ) { }

    async openComments(postId: number, postTitle?: string) {
        this.commentsPost = !this.commentsPost;
        this.idPost = postId;

    }

    async openModal(postId: number, postTitle?: string) {
        const modal = await this.modalCtrl.create({
            component: CommentsModalPage,
            componentProps: {
                paramID: postId,
                paramTitle: postTitle ? postTitle : 'Parametro titolo'
            }
        });
        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });
        return await modal.present();
    }

    visitProfile(id: number) {
        if (id) {
            console.log(id);
            let navigationExtras: NavigationExtras = {
                queryParams: { idUser: id }
            };
            if (id == 1) { //renderlo dinamico in base all'utente loggato,ora quello loggato ha id=1
                this.router.navigate(['home/profile'], navigationExtras);
            } else {
                this.router.navigate(['home/profiles'], navigationExtras);
            }
        }
    }


    async optionsPost(ev: any, id: number, postTitle?: string, cssClass?: string) {
        const popover = await this.popoverController.create({
            component: PostPopoverPage,
            componentProps: {
                paramID: id,
                paramTitle: postTitle ? postTitle : 'Parametro titolo'
            },
            event: ev,
            translucent: true,
            cssClass: cssClass ? cssClass : 'pop-over-style'

        });
        return await popover.present();
    }

    getLikes() {
        this.likesService.getLikes().subscribe(likes => {
            console.log(likes);
        });
    }

    likePost(idPost, idUser) {
        this.getLikes();
        console.log('UserID: ' + idUser + ' - PostID:' + idPost);
        let body: LikePost = {
            id: null,
            user: idUser,
            content: idPost,
            deviceId: null
        };

        this.likesService.likePost(body).subscribe();
    }

}
