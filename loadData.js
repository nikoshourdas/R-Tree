function loadData(){
    
    loadXMLDoc();
    
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
