// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-CvcCFViwoAq16jhjzIXFx4DD-1G14xg",
  authDomain: "nuxt-spa-book-app-3609d.firebaseapp.com",
  projectId: "nuxt-spa-book-app-3609d",
  storageBucket: "nuxt-spa-book-app-3609d.appspot.com",
  messagingSenderId: "914622253046",
  appId: "1:914622253046:web:c5b3aa27bcb709e491a9d7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// 他のファイルでもfirebaseAppを使えるようにする
export default(context, inject) => {
  inject('firebase', firebaseApp);
}
