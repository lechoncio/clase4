// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where, doc, getDoc} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeXv8DykQw-gGAyFRYIer_daFhulKRSIA",
  authDomain: "curso-eactjs2.firebaseapp.com",
  projectId: "curso-eactjs2",
  storageBucket: "curso-eactjs2.appspot.com",
  messagingSenderId: "206045488115",
  appId: "1:206045488115:web:bef069b76ca1753a282886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (idCategory) => {
  let q;  
  if (idCategory) {
    q = query(collection(db, "products"), where("categoryId", "==", idCategory));

  } else {
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return dataFromFirestore
  
}

export const firestoreOneFetch = async (item) => {
  const docRef = doc(db, "products", item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  } else {
    console.log("No such document!");
  }
}

