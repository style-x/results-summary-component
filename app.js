
const reaction = document.getElementsByClassName("reaction");
const memory = document.getElementsByClassName("memory");
const verbal = document.getElementsByClassName("verbal");
const visual = document.getElementsByClassName("visual");
const points = document.getElementsByClassName("points");
let icon = document.getElementsByClassName("icon");
let category = document.getElementsByClassName("category");
let score = document.getElementsByClassName("score");
let db;

//console.log(reaction[0]);

// Fetch db.json via URL 
let requestURL = 'https://style-x.github.io/results-summary-component/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let result = request.response;
  db = result;
    build(db);
}

function build(db) {
  var p;
  for (i = 0; i < 4; i++) {
    icon[i].src = db[i].icon;
    category[i].innerText = db[i].category;
    score[i].innerText = db[i].score;
  }
  points[0].innerText = Math.floor((db[0].score + db[1].score + db[2].score + db[3].score) / 4);
}



