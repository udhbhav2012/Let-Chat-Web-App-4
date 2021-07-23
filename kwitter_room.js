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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom()
{
    Room_names = document.getElementById("team_name").value;

    firebase.database().ref("/").child(Team_names).update({
          purpose : "adding team name"
    });
    localStorage.setItem("Team_names", Room_names);
    window.location = kwitter_page.html;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Team_names = childKey;
    //Start codex
    console.log("Team Name - " + Team_names);
    row = "<div class='team_name' id="+Room_names+" onclick='redirectToTeamName(this.id)' >#"+ Team_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToTeamName(name)
{
    console.log(name);
    localStorage.setItem("team_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("team_name");
    window.location = "index.html";
}