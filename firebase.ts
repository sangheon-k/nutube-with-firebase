// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDjHezGT3EHRMozLj10xsxXSPTdanAiwLI',
  authDomain: 'nutube-video.firebaseapp.com',
  projectId: 'nutube-video',
  storageBucket: 'nutube-video.appspot.com',
  messagingSenderId: '898333498997',
  appId: '1:898333498997:web:8df3033d0ecc8892baa23c',
  measurementId: 'G-ELCN1WWLFZ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);
