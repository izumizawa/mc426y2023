import {
    collection,
    getDocs,
    where,
    query,
    doc,
    setDoc
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getOrdersForStore(storeId) {
    const orderCol = collection(db, 'order');
    const orderQ = query(orderCol, where("store", "==", storeId), where("status", "!=", "Entregue"));
    const orders = await getDocs(orderQ);

    return orders;
}

export async function updateOrder(order) {
    const orderCol = collection(db, 'order');
    const orderRef = doc(orderCol, order.id);
    await setDoc(orderRef, order);
}

export async function addOrder(order) {
    const orderCol = collection(db, 'order');
    const orderRef = doc(orderCol);
    await setDoc(orderRef, order);
}