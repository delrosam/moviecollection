import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

//LAZY LOADING THE HOMEPAGE
@NgModule({declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule{
    
}