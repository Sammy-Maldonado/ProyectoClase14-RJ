import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbYsPbWyzSmQuZ02EyeuKCG-XaIlNh67k",
  authDomain: "proyecto-clase-14.firebaseapp.com",
  projectId: "proyecto-clase-14",
  storageBucket: "proyecto-clase-14.appspot.com",
  messagingSenderId: "884550304066",
  appId: "1:884550304066:web:b2f6f590598fa46ef508db"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);