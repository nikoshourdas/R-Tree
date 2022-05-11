function getData(){
    
    loadXMLDoc();
    
//     console.log("test");
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         myFunction(this);
//         }
//     };
//     xhttp.open("GET", "modelData.xml", true);
//     xhttp.send();

//     function myFunction(xml) {
//     var xmlDoc = xml.responseXML;
//     document.getElementById("demo").innerHTML =
//     xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
// }



} 

function loadXMLDoc(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            readXML(this);
        }
    }
}

function readXML(xml){
    var x , i ,xmlDoc , txt ;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("coordinates");
    for(i = 0 ; i < x.lenght ; i++){
        txt += x[i].childNodes[o].nodeValue + "<br>";

    }
    document.getElementById("displayCoord").innerHTML = txt ; 
}

 //test 1