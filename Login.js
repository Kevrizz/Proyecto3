import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe9A3YuH1QHOG-0tj4rDfMAMN7PxPcLoA",
  authDomain: "loginreact15601-29dab.firebaseapp.com",
  projectId: "loginreact15601-29dab",
  storageBucket: "loginreact15601-29dab.appspot.com",
  messagingSenderId: "798866570210",
  appId: "1:798866570210:web:942ef9045809f8dcf0d7bb"
};

const App = initializeApp(firebaseConfig);

function login(email, password) {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Inicio de sesión exitoso:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error de inicio de sesión:', errorCode, errorMessage);
    });
}

const email = "tu@email.com";
const password = "tuContraseña";
login(email, password);
