var firebaseConfig = {
  apiKey: "AIzaSyDpUI0uejFUDXGad95DinvmEvfBTqU2EOo",
  authDomain: "let-chat-web-app-4.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-4-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-4",
  storageBucket: "let-chat-web-app-4.appspot.com",
  messagingSenderId: "329031575425",
  appId: "1:329031575425:web:ec5be7504a621b01e46a80",
  measurementId: "G-BT90343WY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("team_name");
 window.location = "index.html";
}
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(team_names).push({
 name:user_name,
 message:msg,
 like:0
});

document.getElementById("msg").value = "";
}