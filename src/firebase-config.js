import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAvIS52q1E-0MS9djRs8MHmHOnJ7FfrUM",
  authDomain: "my-shopping-cart-81b4a.firebaseapp.com",
  projectId: "my-shopping-cart-81b4a",
  storageBucket: "my-shopping-cart-81b4a.appspot.com",
  messagingSenderId: "1093224301255",
  appId: "1:1093224301255:web:5f6156d52c30a92c9c74e2",
  measurementId: "G-0EGFZ7YQD2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {

    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutFromGoogle = async () => {
  await signOut(auth).then(() => {
    console.log("Signed Out");
  }).catch((error) => {
    console.log(`aahhh shit here we go again: ${error}`);
  });
}

export const db = getFirestore(app);