import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC6h_yUc_BjnrpFovwWm_1eyViXgtohK4E",
  authDomain: "e-library-ceb8d.firebaseapp.com",
  projectId: "e-library-ceb8d",
  storageBucket: "e-library-ceb8d.appspot.com",
  messagingSenderId: "142590774806",
  appId: "1:142590774806:web:f81af63c9935afe130af37"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
