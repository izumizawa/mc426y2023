import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore"
import { db } from "../config/firebase"

const collectionRef = collection(db, 'store')

export async function getAllStores() {
  try {
    const { docs } = await getDocs(collectionRef);
    const storeList = docs.map(item => ({ ...item.data(), id: item.id }));

    return storeList;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export async function getStoreByName(name) {
  try {
    const _query = query(collectionRef, where("name", '==', name));
    const { docs } = await getDocs(_query);

    if (docs.length) return docs[0].data();
    return null

  } catch (error) {
    console.log(error);
    return null
  }
}


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
  try {
    const newStoreRef = doc(collectionRef);
    await setDoc(newStoreRef, store);
  } catch (error) {
    throw new Error(error)
  }
}

export async function editStore(storeId, store) {
  const storeCol = collectionRef;
  const storeRef = doc(storeCol, storeId);
  await setDoc(storeRef, store)
}
