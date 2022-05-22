
var firebaseConfig = {
  apiKey: "AIzaSyD8stgV5C-tT2ZV-DT122OwVhf8ORpPdFA",
  authDomain: "kwitter-56dd5.firebaseapp.com",
  databaseURL: "https://kwitter-56dd5-default-rtdb.firebaseio.com/",
  projectId: "kwitter-56dd5",
  storageBucket: "kwitter-56dd5.appspot.com",
  messagingSenderId: "811498231082",
  appId: "1:811498231082:web:c4e6c61896b1020502ba53"
};

// Initialize Firebase
firebase.gradeinitializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
