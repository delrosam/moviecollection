import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(private authServ: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController){}

  //SIgnin form submit Handler
  onSignin(form: NgForm){
    //console.log(form.value); //Outputs form value in console
    //Creates a loading spinner overlay
    const loading = this.loadingCtrl.create({
      content: "Please wait while we log you in..."
    });
    loading.present(); //Present loading spinner overlay
    //Sends the signin form values to the signin method in the AuthService(which handles the backend check in Firebase)
    this.authServ.signin(form.value.email, form.value.password)
        .then(data => {
          loading.dismiss(); //Dismisses loading spinner overlay
        })
        .catch(error =>{
          loading.dismiss(); //Dismisses loading spinner overlay
          //Creates an alert overlay for when login fails
          const alert = this.alertCtrl.create({
            title: "Login failed!",
            message: error.message,
            buttons: ['Ok']
          });
          alert.present();//Present alert modal
        });
  }

}
