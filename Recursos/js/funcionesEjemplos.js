//XML
function mostrarXML() {
  var parser, xmlDoc;
  var texto = "<bookstore><book>" +
  "<titulo>Programación en C, C++, JAVA y UML</titulo>" +
  "<autor>Luis Joyanes Aguilar e Ignacio Zahonero Martinez</autor>" +
  "<año>2010</año>" +
  "</book></bookstore>";
  
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(texto,"text/xml");
  
  document.getElementById("titulo").innerHTML =
  xmlDoc.getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
  document.getElementById("autor").innerHTML =
  xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  document.getElementById("año").innerHTML =
  xmlDoc.getElementsByTagName("año")[0].childNodes[0].nodeValue;
  }

//JSON
function mostrarJSON (){
  const myObj = {nombre:"Karen", edad:22, direccion:"El condado",ciudad:"Quito"};
  document.getElementById("nombre").innerHTML = myObj.nombre;
  document.getElementById("edad").innerHTML = myObj.edad;
  document.getElementById("direccion").innerHTML = myObj.direccion;
  document.getElementById("ciudad").innerHTML = myObj.ciudad;
}
 
//AJAX
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}