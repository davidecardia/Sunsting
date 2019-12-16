import {Component, NgZone, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from '../../services/users.service';
import {Post} from '../../interfaces/post';
import {User} from '../../interfaces/user';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    url = "../assets/ssLogo.png";
    auth = true; //gestire da autenticazione
    title = "Profile";
    posts:  Post[];
    users:  User[];
    filteredPost: Post[];
    user = {
        id: 1,
        firstName: "admin",
        lastName: "admin",
        username: "admin"
    };


    constructor(
        private postsService: PostsService,
    ) {}


    ionViewWillEnter(){
        this.getFilteredPosts();
    }


    ngOnInit() {}

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

    /*getFilteredUsers(id){
        this.usersService.getUsers()
            .subscribe(users => {
                this.filteredUser = users.filter(user => {
                    return user.id == id;
                })
            })
    }*/
}













