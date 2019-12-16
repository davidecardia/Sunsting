import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../components/header/header.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import{ TranslateModule} from '@ngx-translate/core';
import {PostComponent} from '../components/post/post.component';
import {CommentsComponent} from '../components/comments/comments.component';
import {RemoveSpacesPipe} from '../pipes/removeSpace';

@NgModule({
  declarations: [HeaderComponent, PostComponent, CommentsComponent, RemoveSpacesPipe],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule

    ],
  exports: [PostComponent, HeaderComponent, TranslateModule, CommentsComponent]
})
export class SharedModule { }
