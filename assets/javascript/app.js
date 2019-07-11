var firebaseConfig = {
    apiKey: "AIzaSyDMa8F9axhjR2EACxjjPbjiVziH7gqfZjA",
    authDomain: "mydata-efc36.firebaseapp.com",
    databaseURL: "https://mydata-efc36.firebaseio.com",
    projectId: "mydata-efc36",
    storageBucket: "mydata-efc36.appspot.com",
    messagingSenderId: "233509212002",
    appId: "1:233509212002:web:0d661c5ee99e353d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();

// Initial Values
var employeeName = "";
var role = "";
var startDate = "";
var monWorked = 0;
var monRate = 0;
var total = 0;



$("#add-user").click(function(event){
  event.preventDefault();
  employeeName =  $("#name-input").val().trim();
  role =  $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  monRate = $("#rate-input").val().trim();
  console.log("employeeName: ", employeeName);

  // db push
database.ref().push({
  name: employeeName,
  role: role,
  start: startDate,
  monWorked: monWorked,
  rate: monRate,
  total: total
});

});

// Firebase watcher .on("child_added"...
database.ref().on("child_added", function(snap){
  var value = snap.val();
  console.log("value: ", value);
})


