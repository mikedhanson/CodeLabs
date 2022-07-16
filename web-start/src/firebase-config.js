/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDGHlMdOrlzhVCZkL-ogKd7N7X2jWNQ-gs",
  authDomain: "codelab-94c49.firebaseapp.com",
  projectId: "codelab-94c49",
  storageBucket: "codelab-94c49.appspot.com",
  messagingSenderId: "978416340318",
  appId: "1:978416340318:web:a998fafe0cf0ee04ea93cf"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}