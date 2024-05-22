// document.addEventListener("DOMContentLoaded", function() {
//     const qrInput = document.getElementById("courseName"); // Define qrInput variable
//     const generateBtn = document.getElementById("generateBtn");
//     const qrImg = document.getElementById("qrImg");
//     const qrCodeContainer = document.querySelector(".qr-code");
//     let qr;

//     generateBtn.addEventListener("click", () => {
//         const qrValue = qrInput.value.trim(); // Use qrInput variable to get input value

//         if (!qrValue) {
//             alert("Please enter a value.");
//             return;
//         }

//         try {
//             // Attempt to generate QR code using JSQR
//             const qrCode = jsQR(qrValue, 4);

//             if (qrCode) {
//                 // Draw QR code on canvas
//                 const canvas = document.createElement("canvas");
//                 canvas.width = qrCode.width;
//                 canvas.height = qrCode.height;
//                 const ctx = canvas.getContext('2d');
//                 ctx.drawImage(qrCode.image, 0, 0);
                
//                 // Set the generated QR code image as the source of the img element
//                 qrImg.src = canvas.toDataURL();
                
//                 // Show the QR code container
//                 qrCodeContainer.style.display = "block";
//             } else {
//                 throw new Error("Failed to generate QR code. Invalid data.");
//             }
//         } catch (error) {
//             console.error("Error generating QR code:", error.message);
//             alert("Failed to generate QR code. Please check the input data.");
//         }
//     });
// });
function generateQR() {
    window.location.href = "attendanceQR.html";
}
function updateAttendance() {
    // Implement attendance update logic here
}

function logout() {
    // Implement logout logic here
    window.location.href = 'index.html';
}