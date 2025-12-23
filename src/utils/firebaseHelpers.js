import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add a new document to any collection
export const addData = async (colName, data) => {
  try {
    const docRef = await addDoc(collection(db, colName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Format Date utility
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};