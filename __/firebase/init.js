if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
	"apiKey": "AIzaSyCh8emBmBwUNZuKm2ZH-tXoVTArvHZrNwQ",
	"databaseURL": "https://magiclink-6262f.firebaseio.com",
	"storageBucket": "magiclink-6262f.appspot.com",
	"authDomain": "magiclink-6262f.firebaseapp.com",
	"messagingSenderId": "27766777545",
	"projectId": "magiclink-6262f"
});