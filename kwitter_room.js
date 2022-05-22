var firebaseConfig = {
    apiKey: "AIzaSyDubI8ql8sp08KpZ2p4kV5g0A8TV84Lr30",
    authDomain: "lets-chat-f0e92.firebaseapp.com",
    databaseURL: "https://lets-chat-f0e92-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f0e92",
    storageBucket: "lets-chat-f0e92.appspot.com",
    messagingSenderId: "895510851200",
    appId: "1:895510851200:web:4cc9b5d68b815770d6c065",
    measurementId: "G-QHNK8D8H88"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML= "welcome"+ user_name + "!";
 function add_room()
 {
    room_name = document.getElementById("room_name").Value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
     }
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("room_name" + Room_names);
       row = "<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
 
       //End code
       });});}
       getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_room.html";
}