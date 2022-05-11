// function loadData(){
    
//     loadXMLDoc();
    
// } 

// function loadXMLDoc(){
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200){
//             readXML(this);
//         }
//     }
// }

// function readXML(xml){
//     var x , i ,xmlDoc , txt ;
//     xmlDoc = xml.responseXML;
//     txt = "";
//     x = xmlDoc.getElementsByTagName("note");
//     for(i = 0 ; i < x.lenght ; i++){
//         txt += x[i].childNodes[o].nodeValue + "<br>";

//     }
//     document.getElementById("displayCoord").innerHTML = txt ; 
// }

//https://www.youtube.com/watch?v=VxKGVb0oOBw
let xmlContent = '';
fetch('modelData.xml').then((response) => {
    response.text().then((xml)=>{
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent,'application/xml');
        let books = xmlDOM.querySelectorAll('note');

        books.forEach(noteXmlNode =>{
            let row = document.createElement('tr');

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);
            
            td = document.createElement('td');
            td.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[2].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[3].innerHTML;
            row.appendChild(td);

            // document.getElementById('displayCoord').innerHTML =  row ;

        });
    });
});