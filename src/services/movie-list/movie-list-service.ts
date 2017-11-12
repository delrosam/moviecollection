import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";
import { Buy } from "../../models/item/buy.model";


@Injectable()
export class MovieListService {
    
    private movieListRef = this.db.list<Item>('movie-list');
    private buyListRef = this.db.list<Item>('buy-list');

    constructor(private db: AngularFireDatabase){}

    getMovieList(){
        return this.movieListRef;
    }

    addItem(item: Item){
        return this.movieListRef.push(item);
    }

    editItem(item: Item){
        return this.movieListRef.update(item.key, item);
    }

    removeItem(item: Item){
        return this.movieListRef.remove(item.key);
    }



    addBuyItem(item: Buy){
        return this.buyListRef.push(item);
    }

    getBuyList(){
        return this.buyListRef;
    }

    removeBuyItem(item: Buy){
        return this.buyListRef.remove(item.key);
    }

    // filterItem(val: String){
    //     if (val && val.trim() != '') {
    //         return this.movieListRef.snapshotChanges.
    //     }
    // }

    
}