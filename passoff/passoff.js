//this is the object that will be used
var obj;

if(localStorage.getItem("count") == undefined) {
    localStorage.setItem("count", 0);
}
//This is used so that the first time the user clicks the button it will always tell them to try again
localStorage.setItem("first", true);

//It will add the informaiton from obj into a text string and then display it.
function printPeople() {
    var text = "";
    //This gives a random number between 0-99
    var ranNum = Math.floor(Math.random() * 100);
    //this adds the information from the json into a text string
    for( i in obj.employees) {
        text += "First name: " + obj.employees[i].firstName + "\n";
        text += "Last name: " + obj.employees[i].lastName + "\n\n";
    }
    //calls the display function
    display(text, ranNum);
}

//This displays the information in obj or will print an error message depending on the ranNum
function display(text, ranNum) {
    var mod = ranNum % 2;
    localStorage.setItem("count", (parseInt(localStorage.getItem("count")) + 1))
    var errText = "Not this time, try agian! Button pressed " + localStorage.getItem("count") + " times!";
    var output = "";
    //if ranNum is odd, it will print an error message
    if(mod != 0 || (localStorage.getItem("first") == true)) {
        output = errText
        localStorage.setItem("first", false);
    } //If it is even it will print the information from obj
    else {
        output = text;    
    }
    //creating js property
    var p = document.createElement('P');
    var t = document.createTextNode(output);
    p.appendChild(t);
    //adding styles with js
    p.style.color = "red";
    p.style.fontSize = "30";
    p.style.fontFamily = "Comic Sans MS, cursive, sans-serif"
    document.getElementById("peoplediv").appendChild(p);
}
//this loads passoff.json into obj using ajax
function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        printPeople();
      }
    };
    xhttp.open("GET", "https://knightfalkon.github.io/passoff/passoff.json", true);
    xhttp.send();
  }

//main driver function
function doStuff() {
    loadJSON();
}