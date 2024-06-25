// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEudMyoiEVtNGHY8iaCLIFH1nbH-D1x7w",
    authDomain: "orbdoc-18f79.firebaseapp.com",
    databaseURL: "https://orbdoc-18f79-default-rtdb.firebaseio.com",
    projectId: "orbdoc-18f79",
    storageBucket: "orbdoc-18f79.appspot.com",
    messagingSenderId: "427017335656",
    appId: "1:427017335656:web:2a9d1168f4692058255cdd",
    measurementId: "G-W553K7Y8EH"
};

// Initialize Realtime Database
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('contactForm');

// Function to fetch messages from Realtime Database and populate the table
function fetchMessages() {
    const messageTable = document.getElementById('message-body');

    // Clear previous messages
    messageTable.innerHTML = '';

    // Fetch messages
    messagesRef.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const messageData = childSnapshot.val();

        // Create a table row for each message
        const row = document.createElement('tr');
        console.log(messageData);
        row.innerHTML = `
            <td>${messageData.name}</td>
            <td>${messageData.emailid}</td>
            <td>${messageData.msgContent}</td>
        `;

        messageTable.appendChild(row);
        });
    }, (error) => {
        console.error("Error fetching messages: ", error);
    });
}

// Fetch messages on page load
document.addEventListener('DOMContentLoaded', fetchMessages);