import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { ToastService } from '../../services/toast/toast.service';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-add-movie-item',
  templateUrl: 'add-movie-item.html',
})
export class AddMovieItemPage {
  item: Item = {
    title: '',
    year: undefined,
  }

  constructor(
            public navCtrl: NavController, 
            public navParams: NavParams,
            private movieList: MovieListService,
            private toast: ToastService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMovieItemPage');
  }

  addItem(item: Item){
    this.movieList.addItem(item).then(ref => {
      this.toast.show(`${item.title} added!`);
      this.navCtrl.setRoot(HomePage, {key: ref.key});
    })
  }

}
