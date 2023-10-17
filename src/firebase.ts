import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCroDR5znRcd9GzgkhL0jyDvOhTjEct0OM',
  authDomain: 'nwitter-2fbc2.firebaseapp.com',
  projectId: 'nwitter-2fbc2',
  storageBucket: 'nwitter-2fbc2.appspot.com',
  messagingSenderId: '928367801489',
  appId: '1:928367801489:web:2913f68dfb0e6c69ae3b30'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
