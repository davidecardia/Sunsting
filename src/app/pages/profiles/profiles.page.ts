import {Component, NgZone, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from '../../services/users.service';
import {Post} from '../../interfaces/post';
import {User} from '../../interfaces/user';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  url = "../assets/ssLogo.png";
  auth = true; //gestire da autenticazione
  title = "Profiles";

  posts:  Post[];
  users:  User[];
  filteredPost: Post[];
  filteredUser: User[];


  user = {
    id: 1,
    firstName: "admin",
    lastName: "admin",
    username: "admin"

  }



  constructor(
      private postsService: PostsService,
      private usersService: UsersService,
      private ngZone: NgZone,
      private activatedRoute: ActivatedRoute,
      private authService: AuthService
  ) {
    this.getUserId();
  }

  ngOnInit() {}

  getUserId(){
    this.ngZone.run(() => {
      this.activatedRoute.queryParams.subscribe(params => {
        this.getFilteredPosts(params.idUser);
        /* this.getFilteredUsers(params.idUser);*/
      })
    });
  }

  getFilteredPosts(id){
    this.postsService.getPosts()
        .subscribe(posts => {
          this.filteredPost = posts.data.filter(post => {
            return post.owner.id == id;
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













