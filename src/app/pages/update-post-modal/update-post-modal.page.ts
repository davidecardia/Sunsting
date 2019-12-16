import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, NavParams} from "@ionic/angular";
import {PostsService} from "../../services/posts.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../interfaces/post";
import {NewPost} from "../../interfaces/new-post";
import {Content} from "../../interfaces/content";

@Component({
    selector: 'app-update-post-modal',
    templateUrl: './update-post-modal.page.html',
    styleUrls: ['./update-post-modal.page.scss'],
})
export class UpdatePostModalPage implements OnInit {

    post: Post;
    form: FormGroup;
    modelId: number;
    posts:  Post[];
    filteredPost: Content[];
    content : string;
    privacyLevel :  string;
    contentType : string;
    topic :  string;
    postsUpdate: Content[];


    user = {
        id: 1,
        firstName: 'admin',
        lastName: 'admin',
        username: 'admin'
    };

    constructor(private modalController: ModalController,
                private modalCtrl: ModalController,
                private loadCtrl: LoadingController,
                private postsService : PostsService,
                private formBuilder: FormBuilder,
                private navParams: NavParams) {
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

        this.modelId = this.navParams.data.paramID;
        console.log(this.modelId);
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getFilteredPosts();
    }

    onSubmit(form: FormGroup) {
        if (!form.valid) {
            return;
        }
        this.loadCtrl
            .create({
                keyboardClose: true,
                message: 'Posting...'
            })
            .then(loadingEl => {
                loadingEl.present();
                let body: NewPost = {
                    contentType: form.value.contentType,
                    ownerId: 1,
                    privacyLevel: form.value.privacyLevel,
                    topicId: form.value.topicId,
                    readers: [],
                    content: form.value.content,
                    active: true

                };
                this.postsService.putPost(this.modelId,body).subscribe(res => {
                    console.log(res);
                })
                loadingEl.dismiss().catch();
            });

        this.modalCtrl.dismiss({
            'dismissed': true
        });

    }


    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

    getFilteredPosts(){
        this.postsService.getPosts()
            .subscribe(posts => {

                let username= (localStorage.getItem('username') || sessionStorage.getItem('username'));
                this.filteredPost = posts.data.filter(post => {
                    return post.owner.username == username;
                });


                this.postsUpdate= this.filteredPost.filter(item => {
                    return item.id == this.modelId;

                })
                this.user = this.postsUpdate[0].owner;
                this.content= this.postsUpdate[0].content;
                this.privacyLevel= this.postsUpdate[0].privacyLevel.name;
                this.contentType = this.postsUpdate[0].contentType.name;
                this.topic = this.postsUpdate[0].topic.name;
            })
    }



}
