import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NativeStorage } from "@ionic-native/native-storage/ngx";
import { AuthGuard } from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {NetworkService} from "./services/network.service";
import { Network } from '@ionic-native/network/ngx';
import {NetworkGuard} from "./guards/network.guard";
import {AuthInterceptorService} from './interceptors/auth-interceptor.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateConfigService} from './services/translate-config.service';
import {PostsService} from "./services/posts.service";
import {VersionAppService} from "./services/version-app.service";
import {AppVersion} from "@ionic-native/app-version/ngx";
import {VersionGuard} from "./guards/version.guard";
import {CommentsModalPageModule} from './pages/comments-modal/comments-modal.module';
import {CreatePostPageModule} from "./pages/create-post/create-post.module";
import {UsersService} from './services/users.service';
import {TopicService} from "./services/topic.service";
import {PostPopoverPageModule} from "./pages/post-popover/post-popover.module";
import {LikesService} from "./services/likes.service";
import {UpdatePostModalPageModule} from "./pages/update-post-modal/update-post-modal.module";


export function LanguageLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
    declarations: [AppComponent, MenuComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        CommentsModalPageModule,
        UpdatePostModalPageModule,
        PostPopoverPageModule,
        CreatePostPageModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (LanguageLoader),
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        NativeStorage,
        AppVersion,
        VersionAppService,
        PostsService,
        LikesService,
        AuthGuard,
        NetworkGuard,
        VersionGuard,
        NetworkService,
        Network,
        AuthService,
        HttpClientModule,
        UsersService,
        TranslateConfigService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

