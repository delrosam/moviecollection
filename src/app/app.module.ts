import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { MovieListService } from '../services/movie-list/movie-list-service';
import { ToastService } from '../services/toast/toast.service';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';



@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    SigninPage,
    TabsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    SigninPage,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieListService,
    ToastService,
    MovieServiceProvider,
    AuthService
  ]
})
export class AppModule {}
