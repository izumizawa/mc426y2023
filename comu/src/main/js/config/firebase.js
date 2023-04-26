const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, where, query, doc, getDoc, documentId } = require('firebase/firestore');


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

export { getExamples, getProductsFromCatalogue };
