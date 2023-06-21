import {
    collection,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"
import { db } from "../config/firebase"


export async function getStore(storeId) {
    const storeRef = doc(db, 'store', storeId);
    const storeSnap = await getDoc(storeRef);
    const store = null;
  
    if (storeSnap.exists()) {
      store = storeSnap.data();
    } else {
      console.log("No such store!");
    }
  
    return store;
  }
  
export async function addStore(store) {
    const newStoreRef = doc(collection(db, 'store'));
    await setDoc(newStoreRef, store);
  }
  
export async function editStore(storeId, store) {
    const storeCol = collection(db, 'store');
    const storeRef = doc(storeCol, storeId);
    await setDoc(storeRef, store)
  }
