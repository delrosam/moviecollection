import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Buy } from '../../models/item/buy.model';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { ToastService } from '../../services/toast/toast.service';
import { BuyListPage } from '../buy-list/buy-list';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
  item: Buy = {
    title: '',
    type: '',
    price: null,
    store:''
  }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieList: MovieListService,
              private toast: ToastService ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

  addBuyItem(item: Buy){
    this.movieList.addBuyItem(item).then(ref => {
      this.toast.show(`${item.title} added!`);
      this.navCtrl.setRoot(BuyListPage, {key: ref.key});
    })
  }

}
