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
var employeeName;
var role;
var startDate;
var monWorked;
var monRate;
var total;

// db push
database.ref().push({
  name: employeeName,
  role: role,
  start: startDate,
  monWorked: monWorked,
  rate: monRate,
  total: total
});


