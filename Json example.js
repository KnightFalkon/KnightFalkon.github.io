var myObj = {
    "name":"John",
    "age":30,
    "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
 }


console.log("Here is the name! " + myObj["name"] + "\n");


console.log("Here is the age " + myObj["age"] + "\n");

age = myobj["age"];

console.log("This won't work, because it is an object" + myObj + "\n");


console.log("This will work, because it has been stringified " + JSON.stringify(myObj) + "\n");

myString = JSON.stringify(myObj);

console.log("This should be the same as the line above " + myString + "\n");

console.log("This should be undefined " + myString["name"] + "\n");

console.log("This will be an object " + JSON.parse(myString));

newObj = JSON.parse(myString);

console.log("This will be the object again " + newObj + "\n");

console.log("This will print out the cars array " + JSON.stringify(newObj["cars"]) + "\n");