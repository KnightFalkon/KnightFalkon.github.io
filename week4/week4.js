//This is the data, usually it would be stored on a server
var jsonString = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//This turns the json into a usable js object
var obj = JSON.parse(jsonString);

//This is used so that the first time the user clicks the button it will always tell them to try again
var first = true;

//This adds the printPeople method to obj
//It will add the informaiton from obj into a text string and then display it.
obj.printPeople = function(count) {
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
    errText = "Not this time, try agian!";
    var textArea = document.getElementById("people");

    //if ranNum is odd, it will print an error message
    if(mod != 0 || first) {
        textArea.value = errText;
        first = false;
    } //If it is even it will print the information from obj
    else {
        textArea.value = text;    
    }
}

//main driver function
function doStuff() {
    obj.printPeople();
}