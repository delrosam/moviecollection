import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMovieItemPage } from './add-movie-item';

@NgModule({
  declarations: [
    AddMovieItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMovieItemPage),
  ],
})
export class AddMovieItemPageModule {}
