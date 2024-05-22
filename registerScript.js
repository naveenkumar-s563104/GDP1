// register.js

// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Get user input from the registration form
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     // Add more fields as needed

//     // Perform registration logic here
//     // You can use AJAX to send registration data to your server-side code
//     // Example:
//     // var formData = new FormData();
//     // formData.append('username', username);
//     // formData.append('password', password);
//     // Perform AJAX request to your server to handle registration

//     // After successful registration, you can redirect the user to the login page or any other page
//     window.location.href = 'index.html'; // Redirect to the login page
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {} from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("Email").value;
    const Firstname = document.getElementById("Firstname").value;
    const Lastname = document.getElementById("Lastname").value;
    const password = document.getElementById("password").value;
    //console.log(email)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Creating Account...");
        // After successful registration, you can redirect the user to the login page or any other page
        window.location.href = "index.html"; // Redirect to the login page
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  });
