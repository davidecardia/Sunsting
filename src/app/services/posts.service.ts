import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Content } from "../interfaces/content";
import { environment } from "../../environments/environment";
import { Page } from "../interfaces/page";
import { NewPost } from "../interfaces/new-post";


@Injectable({
    providedIn: 'root'
})
export class PostsService {

    post: Post[];


    constructor(private http: HttpClient) {
    }


    getPosts(): Observable<Page<Content>> {
        const url = environment.contentUrl;
        return this.http.get<Page<Content>>(url);
    }

    createPost(body): Observable<NewPost> {
        const url = environment.createPostUrl;
        return this.http.post<NewPost>(url, body);

    }

    deletePost(id) {
        const url = environment.deletePostUrl;
        return this.http.delete(url + id);
    }

    putPost(id, body): Observable<NewPost> {
        const url = environment.putPostUrl;
        return this.http.put<NewPost>(url + id, body);
    }








    //json posts

    // getPosts(): Observable<Post[]>{
    //     return this.http.get<Post[]>('./../../assets/posts.json');
    // }
    //

}
