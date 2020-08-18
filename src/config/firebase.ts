import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/database';

//Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyCEnqoK7TzhbDDeZX08ckhZp-jJoSwbOyQ',
	authDomain: 'ryan-bahn-studios.firebaseapp.com',
	databaseURL: 'https://ryan-bahn-studios.firebaseio.com',
	projectId: 'ryan-bahn-studios',
	storageBucket: 'ryan-bahn-studios.appspot.com',
	messagingSenderId: '65739970823',
	appId: '1:65739970823:web:5d7dcd8369a21ec63c4da2',
	measurementId: 'G-HYK17K730L',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

firebase
	.firestore()
	.enablePersistence()
	.catch(function (err: any) {
		if (err.code === 'failed-precondition') {
			// Multiple tabs open, persistence can only be enabled
			// in one tab at a a time.
			// ...
		} else if (err.code === 'unimplemented') {
			// The current browser does not support all of the
			// features required to enable persistence
			// ...
		}
	});
// Subsequent queries will use persistence, if it was enabled successfully

export default firebase;
