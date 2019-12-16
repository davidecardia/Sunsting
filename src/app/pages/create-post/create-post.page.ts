import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController} from "@ionic/angular";
import {Post} from "../../interfaces/post";
import {PostsService} from "../../services/posts.service";
import {NewPost} from "../../interfaces/new-post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.page.html',
    styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

    post: Post;
    form: FormGroup;
    posts:  Post[];
    filteredPost: Post[];
    user = {
        id: 1,
        firstName: "admin",
        lastName: "admin",
        username: "admin"
    };

    private authSource = new BehaviorSubject<boolean>(null);
    authState = this.authSource.asObservable();

    constructor(
        private modalCtrl: ModalController,
        private loadCtrl: LoadingController,
        private postsService : PostsService,
        private formBuilder: FormBuilder
    ) {
        this.form = formBuilder.group({
            content:
                [
                    null,
                    [Validators.required]
                ],
            contentType:
                [
                    null,
                    [Validators.required]
                ],
            topicId:
                [
                    null,
                    [Validators.required]
                ],
            privacyLevel:
                [
                    null,
                    [Validators.required]
                ]
        });
    }

    onSubmit(form: FormGroup) {
        if (!form.valid) {
            return;
        }
        // const content = form.value.content;

        this.loadCtrl
            .create({
                keyboardClose: true,
                message: 'Posting...'
            })
            .then(loadingEl => {
                loadingEl.present();

                let body: NewPost = {
                    contentType: {name: form.value.contentType},
                    ownerId: 1,//change!
                    privacyLevel: form.value.privacyLevel,
                    topicId: form.value.topicId,
                    readers: [],
                    content: form.value.content,
                    active: true
                };
                this.postsService.createPost(body).subscribe(post => {
                    console.log(post);
                    this.authSource.next(true);
                });
                loadingEl.dismiss().catch();
            });

        this.modalCtrl.dismiss({
            'dismissed': true
        });

    }

    ngOnInit() {
    }


    ionViewWillEnter(){
        this.getFilteredPosts();
    }

    getFilteredPosts(){
        this.postsService.getPosts()
            .subscribe(posts => {

                let username= (localStorage.getItem('username') || sessionStorage.getItem('username'));
                this.filteredPost = posts.data.filter(post => {
                    return post.owner.username == username;
                });
                this.user = this.filteredPost[0].owner;

            })
    }


    closeModal(){
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

}




