import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const saveContactForm = async (formData) => {
  await addDoc(collection(db, "contacts"), {
    ...formData,
    submittedAt: new Date(),
  });
};

export const getBooks = async () => {
  const snapshot = await getDocs(collection(db, "books"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getGalleryImages = async () => {
  const snapshot = await getDocs(collection(db, "gallery"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
