import firebase from 'firebase';

var firebaseContact = firebase.initializeApp({
    apiKey: "AIzaSyCDWRLZudIo19OqaziRoHTrZGBnf2S2h_Y",
    authDomain: "portfolio-963be.firebaseapp.com",
    databaseURL: "https://portfolio-963be..firebaseio.com",
    projectId: "portfolio-963be",
    storageBucket: "portfolio-963be.appspot.com",
    messagingSenderId: "376938757776",
    appId: "1:376938757776:web:82b7b9682bdec65b922215"
});

var db = firebaseContact.firestore();

export {db} ;
  

