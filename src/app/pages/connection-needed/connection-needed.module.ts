import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConnectionNeededPage } from './connection-needed.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionNeededPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConnectionNeededPage]
})
export class ConnectionNeededPageModule {}
