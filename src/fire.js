import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyD7D4VPjLUb4C6rnt2urTvOUZgwbOvwouE",
//   authDomain: "auth-development-fb092.firebaseapp.com",
//   projectId: "auth-development-fb092",
//   storageBucket: "auth-development-fb092.appspot.com",
//   messagingSenderId: "769740766569",
//   appId: "1:769740766569:web:3cfe2d14d9999dba0e91f8",
// };

var firebaseConfig = {
  apiKey: "AIzaSyBQ4OFR9yuMdhwel9woRxVkQs6YDjyTHbE",
  authDomain: "auth-production-5c29d.firebaseapp.com",
  projectId: "auth-production-5c29d",
  storageBucket: "auth-production-5c29d.appspot.com",
  messagingSenderId: "92032067682",
  appId: "1:92032067682:web:70e098e3add1b6ab7ec93b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
