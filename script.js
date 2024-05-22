// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     if (username === 'instructor' && password === '12345') {
//         window.location.href = 'instructor_dashboard.html';
//     } else if (username === 'student' && password === '12345') {
//         window.location.href = 'student_dashboard.html';
//     } else {
//         alert('Invalid username or password.');
//     }
// });

// document.getElementById('instructorLogin').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.getElementById('username').value = 'instructor';
//     document.getElementById('password').value = '12345';
// });

// function logout() {
//     // Implement logout logic here
//     window.location.href = 'index.html';
// }

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     if (username === 'instructor' && password === '123456') {
//         window.location.href = 'instructor_dashboard.html';
//     } else if (username === 'student' && password === '123456') {
//         window.location.href = 'student_dashboard.html';
//     } else {
//         alert('Invalid username or password.');
//     }
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHNHnLgsm8HJ9-L4XUmIQ03bumJa3JZEE",
  authDomain: "qrcodescanner-150cc.firebaseapp.com",
  databaseURL: "https://qrcodescanner-150cc-default-rtdb.firebaseio.com",
  projectId: "qrcodescanner-150cc",
  storageBucket: "qrcodescanner-150cc.appspot.com",
  messagingSenderId: "425306294564",
  appId: "1:425306294564:web:c514a419f71dde9fc3cbb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    //console.log(email)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "instructor" && password === "123456") {
          window.location.href = "instructor_dashboard.html";
        }
        if (
          username === "fellahazizh@nwmissouri.edu" &&
          password === "1234567"
        ) {
          window.location.href = "instructor_dashboard.html";
        } else if (username === "student" && password === "123456") {
          window.location.href = "student_dashboard.html";
        } else {
          alert("Invalid username or password.");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
document
  .getElementById("instructorLogin")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("username").value = "instructor";
    document.getElementById("password").value = "12345";
  });

function logout() {
  // Implement logout logic here
  window.location.href = "index.html";
}
