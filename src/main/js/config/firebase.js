const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, where, query, doc, getDoc, setDoc, deleteDoc } = require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyDefzSC_RK5I201FgCn_Ov2xAiU2fIuDCA",
    authDomain: "comu-d2ea0.firebaseapp.com",
    projectId: "comu-d2ea0",
    storageBucket: "comu-d2ea0.appspot.com",
    messagingSenderId: "560395082740",
    appId: "1:560395082740:web:78e695f4bea24d455b37a1"
  };
  
  
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

async function getExamples() {
    const exampleCol = collection(db, 'example');
    const exampleSnapshot = await getDocs(exampleCol);
    const exampleList = exampleSnapshot.docs.map(doc => doc.data());
    return exampleList;
  }

async function getProductsFromCatalogue(catalogueId) {
  const junctionCol = collection(db, 'junction_catalogue_product');
  const junctionQ = query(junctionCol, where("catalogue", "==", catalogueId));
  const junctions = await getDocs(junctionQ);

  const productsCol = collection(db, 'product')
  const productDocs = junctions.docs.map(document => doc(db, `product/${document.data().product}`))
  const productsQ = query(productsCol, where('__name__', "in", productDocs))
  const products = await getDocs(productsQ)

  return products
}

async function addProductsToCatalogue(catalogueId, product) {
  const productsCol = collection(db, 'product');
  const newProductRef = doc(productsCol);
  const junctionCol = collection(db, 'junction_catalogue_product');
  const newJunctionRef = doc(junctionCol);
  const junction = {
    catalogue: catalogueId,
    product: newProductRef.id
  }
  await Promise.all([setDoc(newProductRef, product), setDoc(newJunctionRef, junction)]);
}

async function deleteProductsFromCatalogue(catalogueId, productId) {
  const junctionCol = collection(db, 'junction_catalogue_product');
  const junctionQ = query(junctionCol, where("catalogue", "==", catalogueId), where("product", "==", productId));
  const junctions = await getDocs(junctionQ);
  const junctionRefs = junctions.docs.map(junction => doc(junctionCol, junction.id));

  const productsCol = collection(db, 'product');
  const productRef = doc(productsCol, productId);

  const refs = [...junctionRefs, productRef]
  await Promise.all(refs.map(ref => deleteDoc(ref)));
}

async function editProduct(productId, product) {
  const productsCol = collection(db, 'product');
  const productRef = doc(productsCol, productId);
  await setDoc(productRef, product)
}

async function getStore(storeId) {
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

async function addStore(store) {
  const newStoreRef = doc(collection(db, 'store'));
  await setDoc(newStoreRef, store);
}

async function editStore(storeId, store) {
  const storeCol = collection(db, 'store');
  const storeRef = doc(storeCol, storeId);
  await setDoc(storeRef, store)
}

export { getExamples, getProductsFromCatalogue, addProductsToCatalogue, deleteProductsFromCatalogue, editProduct, getStore, addStore, editStore };
