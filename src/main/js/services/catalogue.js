import {
    collection,
    getDoc,
    getDocs,
    where,
    query,
    doc,
    setDoc,
    deleteDoc
} from "firebase/firestore";
import { db } from "../config/firebase";


export async function getExamples() {
    const exampleCol = collection(db, 'example');
    const exampleSnapshot = await getDocs(exampleCol);
    const exampleList = exampleSnapshot.docs.map(doc => doc.data());
    return exampleList;
}

export async function getProductsFromCatalogue(catalogueId) {
    const junctionCol = collection(db, 'junction_catalogue_product');
    const junctionQ = query(junctionCol, where("catalogue", "==", catalogueId));
    const junctions = await getDocs(junctionQ);

    const productsCol = collection(db, 'product')
    const productDocs = junctions.docs.map(document => doc(db, `product/${document.data().product}`))
    const productsQ = query(productsCol, where('__name__', "in", productDocs))
    const products = await getDocs(productsQ)

    return products
}

export async function addProductsToCatalogue(catalogueId, product) {
    const storeId = catalogueId;
    const productsCol = collection(db, 'product');
    const newProductRef = doc(productsCol);
    const junctionCol = collection(db, 'junction_catalogue_product');
    const newJunctionRef = doc(junctionCol);
    const junction = {
        catalogue: catalogueId,
        product: newProductRef.id,
        storeId: storeId
    }
    await Promise.all([setDoc(newProductRef, product), setDoc(newJunctionRef, junction)]);
}

export async function deleteProductsFromCatalogue(catalogueId, productId) {
    const junctionCol = collection(db, 'junction_catalogue_product');
    const junctionQ = query(junctionCol, where("catalogue", "==", catalogueId), where("product", "==", productId));
    const junctions = await getDocs(junctionQ);
    const junctionRefs = junctions.docs.map(junction => doc(junctionCol, junction.id));

    const productsCol = collection(db, 'product');
    const productRef = doc(productsCol, productId);

    const refs = [...junctionRefs, productRef]
    await Promise.all(refs.map(ref => deleteDoc(ref)));
}

export async function editProduct(productId, product) {
    const productsCol = collection(db, 'product');
    const productRef = doc(productsCol, productId);
    await setDoc(productRef, product)
}
