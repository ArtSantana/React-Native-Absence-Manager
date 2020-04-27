import React from 'react';
import Routes from './src/routes';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Routes />
  );
}
