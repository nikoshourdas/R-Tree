function getData(){
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cloneXML(this);
        }
    };
    xhttp.open("GET", "modelData.xml", true);
    xhttp.send();

} 

function cloneXML(xml) {
    var x, y, cloneNode, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName('Transform')[0];
    cloneNode = x.cloneNode(true);
    xmlDoc.documentElement.appendChild(cloneNode);

    // Output all titles
    y = xmlDoc.getElementsByTagName("title");
    for (i = 0; i < y.length; i++) { 
        txt += y[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt; 
}