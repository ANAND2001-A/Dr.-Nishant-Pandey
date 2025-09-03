// src/repositories/Contact.repo.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../core/firebase/firebase";

export const submitContactForm = async (formData) => {
  try {
    await addDoc(collection(db, "contactForms"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    throw new Error("Failed to submit contact form");
  }
};

export const submitBooking = async (bookingData) => {
  try {
    await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving booking:", error);
    throw new Error("Failed to submit booking");
  }
};
