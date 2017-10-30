import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { ToastService } from '../../services/toast/toast.service';



@IonicPage()
@Component({
  selector: 'page-edit-movie',
  templateUrl: 'edit-movie.html',
})
export class EditMoviePage {
  item: Item;

  constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private movieList: MovieListService,
        private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.movieList.editItem(item)
    .then(() => {
      this.toast.show(`${item.title} edited!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

}
