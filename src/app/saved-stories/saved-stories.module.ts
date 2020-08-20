import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedStoriesPageRoutingModule } from './saved-stories-routing.module';

import { SavedStoriesPage } from './saved-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedStoriesPageRoutingModule
  ],
  declarations: [SavedStoriesPage]
})
export class SavedStoriesPageModule {}
