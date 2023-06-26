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

const storeCollectionRef = collection(db, 'store')
const catalogueCollectionRef = collection(db, 'catalogue')

export async function getAllStores() {
  try {
    const { docs } = await getDocs(storeCollectionRef);
    const storeList = docs.map(item => ({ ...item.data(), id: item.id }));

    return storeList;
  } catch (error) {
    console.log(error)
    return [];
  }
}

export async function getStoreByName(name) {
  try {
    const _query = query(storeCollectionRef, where("name", '==', name));
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
  let store = null;

  if (storeSnap.exists()) {
    store = storeSnap.data();
  } else {
    console.log("No such store!");
  }

  return store;
}

export async function getStoreByEmail(email) {
  const storeQ = query(storeCollectionRef, where("email", "==", email));
  const stores = await getDocs(storeQ);

  if (stores.empty) {
    console.log("No store found for the given email.");
    return null;
  }

  const store = stores.docs[0].data();
  store.id = stores.docs[0].id;
  return store.id;
}

export async function addStore(store) {
  try {
    const newStoreRef = doc(storeCollectionRef);
    const newStoreDoc = await setDoc(newStoreRef, store);
    const newCatalogueRef = doc(catalogueCollectionRef, newStoreRef.id);
    await setDoc(newCatalogueRef, { storeId: newStoreRef.id });

    return newStoreDoc;
  } catch (error) {
    throw new Error(error)
  }
}

export async function editStore(storeId, store) {
  const storeRef = doc(storeCollectionRef, storeId);
  await setDoc(storeRef, store)
}
