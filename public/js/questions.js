// let questions = [
//   {
//     numb: 1,
//     question: "What does HTML stand for?",
//     answer: "Hyper Text Markup Language",
//     options: [
//       "Hyper Text Preprocessor",
//       "Hyper Text Markup Language",
//       "Hyper Text Multiple Language",
//       "Hyper Tool Multi Language",
//     ]
//   },
//     {
//     numb: 2,
//     question: "What does CSS stand for?",
//     answer: "Cascading Style Sheet",
//     options: [
//       "Common Style Sheet",
//       "Colorful Style Sheet",
//       "Computer Style Sheet",
//       "Cascading Style Sheet"
//     ]
//   },
//     {
//     numb: 3,
//     question: "What does PHP stand for?",
//     answer: "Hypertext Preprocessor",
//     options: [
//       "Hypertext Preprocessor",
//       "Hypertext Programming",
//       "Hypertext Preprogramming",
//       "Hometext Preprocessor"
//     ]
//   },
//     {
//     numb: 4,
//     question: "What does SQL stand for?",
//     answer: "Structured Query Language",
//     options: [
//       "Stylish Question Language",
//       "Stylesheet Query Language",
//       "Statement Question Language",
//       "Structured Query Language"
//     ]
//   },
//     {
//     numb: 5,
//     question: "What does XML stand for?",
//     answer: "eXtensible Markup Language",
//     options: [
//       "eXtensible Markup Language",
//       "eXecutable Multiple Language",
//       "eXTra Multi-Program Language",
//       "eXamine Multiple Language"
//     ]
//   },
// ];

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
// let data = [];

window.onload = function (e) {
  console.log("questions");
  // firebase

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAI5OO4ClxdvdO5Bl2-w3s0UEcUK-Oca1w",
    authDomain: "quiz-application-49b65.firebaseapp.com",
    projectId: "quiz-application-49b65",
    storageBucket: "quiz-application-49b65.appspot.com",
    messagingSenderId: "946683088707",
    appId: "1:946683088707:web:6efe2a677ddfadccd229f6",
    measurementId: "G-RE09DXH3N0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get a reference to the Firestore service
  const db = getFirestore(app);

  const code = localStorage.getItem("userdata1") ? JSON.parse(localStorage.getItem("userdata1")) : null;
  // console.log(code);

  // if (code) {
  //   (async () => {
  //     const querySnapshot = await getDocs(collection(db, code));
  //     querySnapshot.forEach((doc) => {
  //       const d = doc.data();
  //       console.log(d);
  //       questions.push(d.questions); // assuming the questions are stored in a property called "questions" in the Firestore document
  //     });
  //     areQuestionsLoaded = true;
  //   })();
  // } else {
  //   console.error("No code found in local storage.");
  // }


  (async () => {
    // const querySnapshot = await getDocs(collection(db, "questions"));
    const querySnapshot = await getDocs(query(collection(db, "questions"), where("code", "==", JSON.parse(localStorage.getItem("userdata1")))));
    querySnapshot.forEach((doc) => {
      const d = doc.data();
      console.log(d);
      questions.push(d)
    });
    areQuestionsLoaded = true;
  })();
}
// var questions=data;


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(questions);