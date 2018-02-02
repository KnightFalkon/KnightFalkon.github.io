var jsonString = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(jsonString);

var first = true;

obj.printPeople = function(count) {
    var text = "";
    var noText = Math.floor(Math.random() * 100);
    for( i in obj.employees) {
        text += "First name: " + obj.employees[i].firstName + "\n";
        text += "Last name: " + obj.employees[i].lastName + "\n\n";
    }
    display(text, noText);
}

function display(text, noText) {
    var mod = noText % 2;
    errText = "Not this time, try agian!";
    var textArea = document.getElementById("people");

    if(mod != 0 || first == true) {
        textArea.value = errText;
        first = false;
    }
    else {
        textArea.value = text;    
    }
}

function doStuff() {
    obj.printPeople();
}