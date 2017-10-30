import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  constructor(private authServ: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController){
              
  }

  //Signup form submit Handler
  onSignup(form: NgForm){
    //console.log(form.value); //Outputs all values from form in console
    //Creates a loading overlay/Spinner
    const loading = this.loadingCtrl.create({
      content: "Signing you up..."
    });
    loading.present();//Present loading spinner overlay
    //Sends the signup form values to the signup method in the AuthService(Which handles the backend creation of a user in Firebase)
    this.authServ.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss(); //Dismisses loading spinner overlay
      })
      .catch(error => {
        loading.dismiss(); //Dismisses loading spinner overlay
        //Creates an alert overlay if signin fails
        const alert = this.alertCtrl.create({
          title: "Signup failed!",
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();//Present alert modal
      });
  }
  
}
