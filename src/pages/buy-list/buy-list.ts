import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Buy } from '../../models/item/buy.model';
import { Observable } from 'rxjs/Observable';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { ToastService } from '../../services/toast/toast.service';



@Component({
  selector: 'page-buy-list',
  templateUrl: 'buy-list.html',
})
export class BuyListPage {
  searchQuery: string = '';
  movieCollection: Buy[];
  buyList$: Observable<Buy[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieList: MovieListService,
              private toast: ToastService) {
  }

  ionViewDidLoad() {
    this.searchQuery = '';
    this.initializeItems();
  }

  initializeItems(){
    
       this.buyList$ = this.movieList
       .getBuyList() //Returns DB LIST
       .snapshotChanges() //Gives us access to Key and Value Pairs
       .map(changes => {
           return this.movieCollection = changes.map(c => ({
               key: c.payload.key, ...c.payload.val(),
           }
         ));
   
       });
   
       
     }


     removeItem(item: Buy){
      this.movieList.removeBuyItem(item)
      .then(() => {
        this.toast.show(`${item.title} deleted!`);
        this.navCtrl.setRoot(BuyListPage);
      })
    }
  
  
  
  searchItems(ev: any) {
     // Reset items back to all of the items
      this.initializeItems();
     
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      //if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
  
        this.movieCollection = this.movieCollection.filter((item) => {
          if(item.title.toLowerCase().indexOf(val.toLowerCase()) > -1){
            console.log("INSIDE : "+item.title);
            return this.movieCollection;
          }
         
        })
  
      }
  
  
  
    }

}
