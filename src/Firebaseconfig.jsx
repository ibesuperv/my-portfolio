import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider , FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL3s_S6MTYObvipihCw-a7l7jtBxtoahY",
  authDomain: "my-portfolio-69d50.firebaseapp.com",
  projectId: "my-portfolio-69d50",
  storageBucket: "my-portfolio-69d50.appspot.com",
  messagingSenderId: "592989160837",
  appId: "1:592989160837:web:4a3694268a42a3608f30ec",
  measurementId: "G-2GTZK7ZHV1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider=new GithubAuthProvider();
const facebookProvider= new FacebookAuthProvider();

export { auth, provider,gitProvider, facebookProvider };
