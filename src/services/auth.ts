import firebase from 'firebase';

export class AuthService{
    //This method creates new users from the Signup Form
    signup(email: string, password: string){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    //This method signs in users from the Signin Form
    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout(){
        firebase.auth().signOut();
    }

    getActiveUser(){
        return firebase.auth().currentUser;
    }

}