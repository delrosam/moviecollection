import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";


@Injectable()
export class MovieListService {
    
    private movieListRef = this.db.list<Item>('movie-list');

    constructor(private db: AngularFireDatabase){}

    geMovieList(){
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
    
}