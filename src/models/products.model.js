import { db } from "../config/firebase.js";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

const colRef = collection(db, "products");

export const getAll = async () => {
    const snapshot = await getDocs(colRef);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const getById = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return null;

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};

export const create = async (data) => {
    const docRef = await addDoc(colRef, data);
    const snapshot = await getDoc(docRef);

    return {
        id: docRef.id,
        ...snapshot.data(),
    };
};

export const update = async (id, data) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return null;

    await updateDoc(docRef, data);
    const updated = await getDoc(docRef);

    return {
        id,
        ...updated.data(),
    };
};

export const remove = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) return false;

    await deleteDoc(docRef);
    return true;
};
