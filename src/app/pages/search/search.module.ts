import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search.page';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: SearchPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SearchPage]
})
export class SearchPageModule {
}