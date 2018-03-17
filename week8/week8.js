// function doStuff() {
//     var elem = document.getElementById("clickBait");

//     elem.classList.add("stay");
// }

window.addEventListener('load', function(){
    
    var elem01 = document.getElementById("clickBait");    
    var elem = document.getElementById("clickBait1");
    var elem2 = document.getElementById("clickDiv1");
    var elem3 = document.getElementById("clickBait2");
    var elem4 = document.getElementById("clickDiv2");
    var elem5 = document.getElementById("clickBait3");
    var elem6 = document.getElementById("clickDiv3");
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    var c = document.getElementById("3");
    var d = document.getElementById("4");
    
    
    elem01.addEventListener('click', function(e){
        elem01.classList.add("stay");
        elem.classList.add("stay");
        elem2.classList.add("leave");
        elem3.classList.add("go");
        elem4.classList.add("go");
        elem5.classList.add("go");
        elem6.classList.add("go");
        a.classList.add("leave");
        b.classList.add("leave");
        c.classList.add("leave");
        d.classList.add("leave");
        
    }, false)
 
}, false)

// window.addEventListener('load', function(){
    
//     var elem = document.getElementById("clickDiv");
    
//     elem.addEventListener('touchstart', function(e){
//         elem.classList.add("leave");
//     }, false)
 
// }, false)