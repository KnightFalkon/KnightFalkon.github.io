function getStocks() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        localStorage.setItem("dowStocks", this.responseText);
        // dowStocks = JSON.parse(this.responseText);
        popSelect();
        }
    };
    xhttp.open("GET", 'https://marketdata.websol.barchart.com/getQuote.' +
                'json?apikey=1d7a3b06256b9bde9a218b59a82dd8f1&symbols=' + 
                'MMM,AXP,AAPL,BA,CAT,CVX,CSCO,KO,DIS,DWDP,XOM,GE,GS,HD,IBM,' + 
                'INTC,JNJ,JPM,MCD,MRK,MSFT,NKE,PFE,PG,TRV,UTX,UNH,VZ,V,WMT', true);
    xhttp.send();
}

//use json data to populate a select tag
function popSelect() {
    newSelect = document.getElementById('stocks');
    var dowStocks = JSON.parse(localStorage.getItem('dowStocks'));
    console.log(dowStocks);
    for(element of dowStocks.results)
    {
    var opt = document.createElement("option");
    opt.value= element.symbol;
    opt.innerHTML = element.name; // whatever property it has

    // then append it to the select element
    newSelect.appendChild(opt);
    }

    document.getElementById("hideAll").style.display = "none";
}

function updatePrice() {
    var index;
    var choice = document.getElementById('stocks').value;
    var dowStocks = JSON.parse(localStorage.getItem('dowStocks'));    
    for(element in dowStocks.results) {
        if(dowStocks.results[element].symbol == choice) {
            index = element;
        }
    }
    document.getElementById('stockPrice').innerHTML = "$" + dowStocks.results[index].lastPrice;
    document.getElementById('stockName').innerHTML = dowStocks.results[0].name;  
    
}

function getStock() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        localStorage.setItem('cStock', this.responseText);
        var cStock = JSON.parse(localStorage.getItem('cStock'));
        document.getElementById('stockPrice').innerHTML = "$" + cStock.results[0].lastPrice;
        document.getElementById('stockName').innerHTML = cStock.results[0].name;  
          
    }
};
xhttp.open("GET", 'https://marketdata.websol.barchart.com/getQuote.' +
            'json?apikey=1d7a3b06256b9bde9a218b59a82dd8f1&symbols=' + 
            document.getElementById('stockInput').value, true);
xhttp.send();
}

window.addEventListener('load', function(){
    
    var butto = document.getElementById("getStock");    
    var elem1 = document.getElementById("1");   
    var elem2 = document.getElementById("stocks"); 
    var elem3 = document.getElementById("si1"); 
    var elem4 = document.getElementById("si2"); 
    var elem5 = document.getElementById("stockInput"); 
    var elem6 = document.getElementById("getStock"); 
    var elem7 = document.getElementById("stockPrice"); 
    var select = document.getElementById("stocks");
    var elem8 = this.document.getElementById("goBack");
    var elem9 = this.document.getElementById("stockName");
    
    
    
    butto.addEventListener('click', function(e){
        elem1.classList.add("go-left");
        elem2.classList.add("go-right");
        elem3.classList.add("go-down");
        elem4.classList.add("go-left");
        elem5.classList.add("go-right");
        elem6.classList.add("go-down");
        elem7.classList.add("appear");
        elem8.classList.add("appearB");
        elem9.classList.add("appearU");

        elem7.classList.add("invis");
        elem8.classList.add("invis");
        elem9.classList.add("invis");
        

        elem8.disabled = false;
        elem2.disabbled = true;
        
        
    }, false)

    select.addEventListener('change', function(e) {
        elem1.classList.add("go-left");
        elem2.classList.add("go-right");
        elem3.classList.add("go-down");
        elem4.classList.add("go-left");
        elem5.classList.add("go-right");
        elem6.classList.add("go-down");
        elem7.classList.add("appear");
        elem8.classList.add("appearB");
        elem9.classList.add("appearU");
        

        elem7.classList.add("invis");
        elem8.classList.add("invis");
        elem9.classList.add("invis");

        elem8.disabbled = false;
        elem2.disabbled = true;
        
        
    }, false)
 
}, false)

function goBack() {
    var butto = document.getElementById("getStock");    
    var elem1 = document.getElementById("1");   
    var elem2 = document.getElementById("stocks"); 
    var elem3 = document.getElementById("si1"); 
    var elem4 = document.getElementById("si2"); 
    var elem5 = document.getElementById("stockInput"); 
    var elem6 = document.getElementById("getStock"); 
    var elem7 = document.getElementById("stockPrice"); 
    var select = document.getElementById("stocks");
    var elem8 = this.document.getElementById("goBack");
    var elem9 = this.document.getElementById("stockName");
    

    elem1.classList.remove("go-left");
    elem2.classList.remove("go-right");
    elem3.classList.remove("go-down");
    elem4.classList.remove("go-left");
    elem5.classList.remove("go-right");
    elem6.classList.remove("go-down");
    elem7.classList.remove("appear");
    elem8.classList.remove("appearB");
    elem9.classList.remove("appearU");
    

    elem7.classList.add("invis");
    elem8.classList.add("invis");
    elem9.classList.add("invis");
    
    elem8.disabbled = true;
    elem2.disabbled = false;
    
}