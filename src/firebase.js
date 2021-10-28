import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9b7yWj5Unk8i_T1VgayEpahw1rq7uF1U",
  authDomain: "idea-box-live-44fa5.firebaseapp.com",
  projectId: "idea-box-live-44fa5",
  storageBucket: "idea-box-live-44fa5.appspot.com",
  messagingSenderId: "105067988980",
  appId: "1:105067988980:web:5828c0a89c5f0e7c591ba1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, firebase, db };
