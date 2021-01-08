import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
    apiKey: "AIzaSyBUDuba6Yvv34BELQ9qZKMDy3wPblsOXaU",
    authDomain: "ejemplo-proyecto-25e85.firebaseapp.com",
    databaseURL: "https://ejemplo-proyecto-25e85.firebaseio.com",
    projectId: "ejemplo-proyecto-25e85",
    storageBucket: "ejemplo-proyecto-25e85.appspot.com",
    messagingSenderId: "619316183352",
    appId: "1:619316183352:web:1aefe8d7583b14cbd401cd"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

createApp(App).use(store).use(router).mount('#app')
