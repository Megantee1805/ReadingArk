import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedStoriesPage } from './saved-stories.page';

const routes: Routes = [
  {
    path: '',
    component: SavedStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedStoriesPageRoutingModule {}
