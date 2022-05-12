// function getData(){
  
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cloneXML(this);
//         }
//     };
//     xhttp.open("GET", "modelData.xml", true);
//     xhttp.send();

// } 

// function cloneXML(xml) {
//     var x, y, cloneNode, i, xmlDoc, txt;
//     xmlDoc = xml.responseXML;
//     txt = "";
//     x = xmlDoc.getElementsByTagName('Transform')[0];
//     cloneNode = x.cloneNode(true);
//     xmlDoc.documentElement.appendChild(cloneNode);

//     // Output all titles
//     y = xmlDoc.getElementsByTagName("title");
//     for (i = 0; i < y.length; i++) { 
//         txt += y[i].childNodes[0].nodeValue + "<br>";
//     }
//     document.getElementById("demo").innerHTML = txt; 
// }


//  try 2 
// https://www.youtube.com/watch?v=MDAWie2Sicc
// function getData(){
//     document.addEventListener("DOMContentLoaded",()=>{
//         let url = "modelData.xml";
//         fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);let parser = new DOMParser();
//             let xml = parser.parseFromString(data , "application/xml");
//             document.getElementById("id3").textContent = data ; 
//         })
//     })
// }

//try 3 
//https://www.w3schools.com/xml/tryit.asp?filename=tryxml_display_table 

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "modelData.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    
    for (i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }