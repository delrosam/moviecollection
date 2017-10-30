import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  item: Item;

  movieTitleParam: string;


  movieTitle: any;
  movieYear: any;
  movieRated: any;
  movieReleased: any;
  movieRuntime: any;
  movieGenre: any;
  movieDirector: any;
  movieActors: any;
  moviePlot: any;
  moviePoster: any;
  movieImdbID: any;
  movieBoxOffice: any;
  movieProduction: any;
  movieWebsite: any;

  movieimdbRating: any;
  movieimdbVotes: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            public http: Http) {


  }


  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    this.movieTitleParam = this.item.title.replace(/ /g,"%20");

    this.http.get('http://www.omdbapi.com/?t='+this.item.title+'&apikey=6a66af92').map(res => res.json()).subscribe(
      data => {
        this.movieTitle = data.Title;
        this.movieYear = data.Year;
        this.movieRated = data.Rated;
        this.movieReleased = data.Released;
        this.movieRuntime = data.Runtime;
        this.movieGenre = data.Genre;
        this.movieDirector = data.Director;
        this.movieActors = data.Actors;
        this.moviePlot = data.Plot;
        this.moviePoster = data.Poster;
        this.movieImdbID = data.imdbID;
        this.movieBoxOffice = data.BoxOffice;
        this.movieProduction = data.Production;
        this.movieWebsite = data.Website;
  
        this.movieimdbRating = data.imdbRating;
        this.movieimdbVotes = data.imdbVotes;
  
      },
      err => {
        console.log("Oops!");
      });

  }


}
