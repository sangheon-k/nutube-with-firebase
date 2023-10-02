// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

// const analytics = getAnalytics(app);
