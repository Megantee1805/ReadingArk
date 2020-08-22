import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStoryPage } from './edit-story.page';

const routes: Routes = [
  {
    path: '',
    component: EditStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditStoryPageRoutingModule {}
