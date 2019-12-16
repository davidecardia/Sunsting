import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Content} from "../interfaces/content";
import {Page} from "../interfaces/page";
import {LikesList} from "../interfaces/likes-list";
import {LikePost} from "../interfaces/like-post";

@Injectable({
    providedIn: 'root'
})
export class LikesService {

    constructor(
        private http : HttpClient
    ) { }


    likePost(body): Observable<LikePost>{
        const url = environment.likePostUrl;
        return this.http.post<LikePost>(url,body);
    }


    getLikes(): Observable<LikesList>{
        const url = environment.likesListPostUrl;
        return this.http.get<LikesList>(url);
    }

}
