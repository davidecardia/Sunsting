import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NetworkGuard } from './guards/network.guard';
import { VersionGuard } from './guards/version.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
        canActivate: [AuthGuard, NetworkGuard, VersionGuard]
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule',
        canActivate: [NetworkGuard, VersionGuard, LoggedGuard]
    },
    {
        path: 'home/profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'search',
        loadChildren: './pages/search/search.module#SearchPageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'settings',
        loadChildren: './pages/settings/settings.module#SettingsPageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'home/features',
        loadChildren: './pages/features/features.module#FeaturesPageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'home/inspired-to',
        loadChildren: './pages/inspired-to/inspired-to.module#InspiredToPageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'home/advertising',
        loadChildren: './pages/advertising/advertising.module#AdvertisingPageModule',
        canActivate: [NetworkGuard, VersionGuard]
    },
    {
        path: 'home/profiles',
        loadChildren: './pages/profiles/profiles.module#ProfilesPageModule'
    },
    {
        path: 'update',
        loadChildren: './pages/update/update.module#UpdatePageModule'
    },
    {
        path: '**',
        redirectTo: 'home/dashboard'
    },
    {
        path: 'connection-needed',
        loadChildren: './pages/connection-needed/connection-needed.module#ConnectionNeededPageModule'
    },
    {
        path: 'comments-modal',
        loadChildren: './pages/comments-modal/comments-modal.module#CommentsModalPageModule'
    },
    {
        path: 'create-post',
        loadChildren: './pages/create-post/create-post.module#CreatePostPageModule'
    },
    {
        path: 'post-popover',
        loadChildren: './pages/post-popover/post-popover.module#PostPopoverPageModule'
    },
    {
        path: 'update-post-modal',
        loadChildren: './pages/update-post-modal/update-post-modal.module#UpdatePostModalPageModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
