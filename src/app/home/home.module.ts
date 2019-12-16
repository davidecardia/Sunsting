import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
                {
                    path: '',
                    component: HomePage,

                    children: [

                        {
                            path: 'dashboard',
                            loadChildren: './../pages/dashboard/dashboard.module#DashboardPageModule'
                        },
                        {
                            path: 'search',
                            loadChildren: './../pages/search/search.module#SearchPageModule'
                        },
                        {
                            path: 'profile',
                            loadChildren: './../pages/profile/profile.module#ProfilePageModule'

                        },
                        {
                            path: 'settings',
                            loadChildren: './../pages/settings/settings.module#SettingsPageModule'
                        },
                        {
                            path: 'features',
                            loadChildren: './../pages/features/features.module#FeaturesPageModule'
                        },
                        {
                            path: 'advertising',
                            loadChildren: './../pages/advertising/advertising.module#AdvertisingPageModule'
                        },
                        {
                            path: 'inspired-to',
                            loadChildren: './../pages/inspired-to/inspired-to.module#InspiredToPageModule'
                        },
                        {
                            path: 'profiles',
                            loadChildren: './../pages/profiles/profiles.module#ProfilesPageModule'
                        }
                    ]
                }
            ]
        )
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
