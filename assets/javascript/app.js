var firebaseConfig = {
  apiKey: "AIzaSyDMa8F9axhjR2EACxjjPbjiVziH7gqfZjA",
  authDomain: "mydata-efc36.firebaseapp.com",
  databaseURL: "https://mydata-efc36.firebaseio.com",
  projectId: "mydata-efc36",
  storageBucket: "mydata-efc36.appspot.com",
  messagingSenderId: "233509212002",
  appId: "1:233509212002:web:2c66b91bda714330"
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
var newFormat = "MM/DD/YYYY";

console.log("today: ", $.now());

$("#submitbutton").click(function(event){
  event.preventDefault();
  employeeName =  $("#name-input").val().trim();
  role =  $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  monRate = parseInt($("#rate-input").val().trim());
  console.log("employeeName: ", employeeName);

  
  var formatStartDate = moment(startDate).format(newFormat);
  var monthsWorked = parseInt(moment().diff(formatStartDate, 'months'));
  console.log("monthsWorked = ",  monthsWorked);
  console.log("startDate typeof", typeof(startDate));
  console.log("formatStartDate", formatStartDate);

  total = monthsWorked * monRate;
  console.log("total = ", total);

  
  // db push
database.ref().push({
  name: employeeName,
  role: role,
  start: formatStartDate,
  monthsWorked: monthsWorked,
  rate: monRate,
  total: total,
  //pulls the current time stamp in UTC
  dateAdded: firebase.database.ServerValue.TIMESTAMP
});

});

// Firebase watcher .on("child_added"...
database.ref().on("child_added", function(snap){
  var value = snap.val();
  console.log("value: ", value);
  console.log("name: ", value.name);

  $("tbody").append("<tr><td>" + value.name + "</td><td>" + value.role + "</td><td>" + value.start + "</td><td>" + value.monthsWorked + "</td><td>" + value.rate + "</td><td>" + value.rate + "</td></tr>");
})


