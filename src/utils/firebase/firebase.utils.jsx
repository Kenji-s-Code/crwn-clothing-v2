import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAV-nLr2-HNlKANRyrSquK-L2PGGNjkkpM",
	authDomain: "crwn-clothing-db-248cc.firebaseapp.com",
	projectId: "crwn-clothing-db-248cc",
	storageBucket: "crwn-clothing-db-248cc.appspot.com",
	messagingSenderId: "822307186850",
	appId: "1:822307186850:web:b72b4fa0eed39aee768ffb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
