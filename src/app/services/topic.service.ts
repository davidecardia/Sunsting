import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../interfaces/page";
import {Content} from "../interfaces/content";
import {environment} from "../../environments/environment";
import {Topic} from "../interfaces/topic";
import {forEach} from '@angular-devkit/schematics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {
  }



  getTopic(): Observable<Page<Topic>>{
    const url = environment.topicUrl;
    return this.http.get<Page<Topic>>(url);
  }




}
