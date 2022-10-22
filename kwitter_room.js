// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDYuzBGGQ5hy4yTNZQARoq1aomHVYJjI",
  authDomain: "kwitter-c9c5a.firebaseapp.com",
  databaseURL: "https://kwitter-c9c5a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c9c5a",
  storageBucket: "kwitter-c9c5a.appspot.com",
  messagingSenderId: "1090039615181",
  appId: "1:1090039615181:web:9761578f961ea17eea2384"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  username = localStorage.getItem("username");
  document.getElementById("welcome_username").innerHTML = "Welcome "+username;
  
  function addRoom(){
  roomname = document.getElementById("roomname").value;
  firebase.database().ref("/").child(roomname).update({
      purpose:"adding room"
  });
  localStorage.setItem("roomname",roomname);
  window.location = "kwitter_page.html";

}
  
  
  
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log(Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location = "kwitter_page.html";
    
}
function LogOut() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}





  
  
    
  
  