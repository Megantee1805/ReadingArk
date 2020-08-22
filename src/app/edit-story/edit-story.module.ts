import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStoryPageRoutingModule } from './edit-story-routing.module';

import { EditStoryPage } from './edit-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStoryPageRoutingModule
  ],
  declarations: [EditStoryPage]
})
export class EditStoryPageModule {}
