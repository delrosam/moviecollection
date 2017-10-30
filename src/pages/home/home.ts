import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieListService } from '../../services/movie-list/movie-list-service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';
import { ToastService } from '../../services/toast/toast.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movieList$_isScalar: Item[];
  searchQuery: string = '';
  movieCollection: Item[];
  movieList$: Observable<Item[]>;

  constructor(public navCtrl: NavController,
              private movieList: MovieListService,
              private toast: ToastService) {

      this.initializeItems();
      
  }

  initializeItems(){
 
    this.movieList$ = this.movieList
    .getMovieList() //Returns DB LIST
    .snapshotChanges() //Gives us access to Key and Value Pairs
    .map(changes => {
        return this.movieCollection = changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
        }
      ));

    });

    

    
  }

  


  removeItem(item: Item){
    this.movieList.removeItem(item)
    .then(() => {
      this.toast.show(`${item.title} deleted!`);
      this.navCtrl.setRoot(HomePage);
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
