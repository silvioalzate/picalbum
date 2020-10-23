import firebase from "firebase";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

var config = {
  apiKey: "AIzaSyDhjj2WMfrKWXK11h1SJvd9_0kygkfP7Oc",
  authDomain: "pic-album-14633.firebaseapp.com",
  databaseURL: "https://pic-album-14633.firebaseio.com",
  projectId: "pic-album-14633",
  storageBucket: "pic-album-14633.appspot.com",
  messagingSenderId: "157037854798",
  appId: "1:157037854798:web:47f8da5e2a40345b60c31f"
};

firebase.initializeApp(config);

export default {
  auth: firebase.auth(),
  db: firebase.firestore(),
  storage: firebase.storage(),
  async loginF() {
    const provider = new firebase.auth.FacebookAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },

  async loginG() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },

  async logout() {
    await firebase.auth().signOut();
  }
};
