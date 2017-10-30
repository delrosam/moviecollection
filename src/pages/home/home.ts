import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movieList$: Observable<Item[]>

  constructor(public navCtrl: NavController,
              private movieList: MovieListService,
              private toast: ToastService) {

      this.movieList$ = this.movieList
      .geMovieList() //Returns DB LIST
      .snapshotChanges() //Gives us access to Key and Value Pairs
      .map(changes => {
          return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
          }));
      });
      
  }

  removeItem(item: Item){
    this.movieList.removeItem(item)
    .then(() => {
      this.toast.show(`${item.title} deleted!`);
      this.navCtrl.setRoot('HomePage');
    })
  }


}
