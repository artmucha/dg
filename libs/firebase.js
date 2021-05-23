// import * as admin from 'firebase-admin';
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
};

// export const verifyIdToken = (token) => {
//   const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

//   if (!admin.apps.length) {
//     admin.initializeApp({
//       credential: admin.credential.cert({
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
//       }),
//       databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     })
//   };

//   return admin
//     .auth()
//     .verifyIdToken(token)
//     .catch((error) => {
//       throw error
//     })
// };