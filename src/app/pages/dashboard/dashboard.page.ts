import { Component, Input, NgZone } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Content } from '../../interfaces/content';
import { Topic } from '../../interfaces/topic';
import { TopicService } from '../../services/topic.service';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
    url = '../assets/ssLogo.png';
    title = 'Dashboard';
    posts: Content[];
    topic: Topic[];
    @Input() ev;
    constructor(
        private postsService: PostsService,
        private topicService: TopicService,
        private ngZone: NgZone,
        private authService: AuthService
    ) {
        /* if (this.authService.checkDevice() == 'WEB') {
             if (this.authService.isAuthenticated() === false) {
                 sessionStorage.setItem('token', 'Bearer 44lfoipu76vcm81ej8nkb836u1ph3j0f');
             }
         } else {
             if (this.authService.isAuthenticated() === false) {
                 localStorage.setItem('token', 'Bearer 44lfoipu76vcm81ej8nkb836u1ph3j0f');
             }
         }*/
    }

    ionViewWillEnter() {
        this.getPosts();
    }

    getPosts() {
        this.postsService.getPosts().subscribe(posts => {
            this.ngZone.run(() => {
                this.posts = posts.data;
            });

            console.log(this.posts);
        });
    }

    ionRefresh(event) {
        setTimeout(() => {
            this.getPosts();
            // complete()  signify that the refreshing has completed and to close the refresher
            event.target.complete();
        }, 2000);
    }
    ionPull(event) {
        // Emitted while the user is pulling down the content and exposing the refresher.
    }
    ionStart(event) {
        // Emitted when the user begins to start pulling down.
    }
}
