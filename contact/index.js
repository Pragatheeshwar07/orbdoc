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

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("sub-button").addEventListener("submit", submitForm);

function submitForm() {

    var name = document.getElementById("name").value;
    var emailid = document.getElementById("email").value;
    var msgContent = document.getElementById("msg").value;
    console.log(name,emailid,msgContent);
    window.alert("Message sent successfully");

    saveMessages(name, emailid, msgContent);
  //   reset the form
    // document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
    console.log("data being pushed");
    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};
