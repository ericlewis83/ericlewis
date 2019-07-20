let boiseC = document.getElementById("boise-closures");
let boiseS = document.getElementById("boise-services");
let bName = document.getElementById("boise-name");
let bAddr = document.getElementById("boise-addr");
let bPhone = document.getElementById("boise-phone");
let bOrdinance = document.getElementById("boise-ordinance")

let provoC = document.getElementById("provo-closures");
let provoS = document.getElementById("provo-services");
let pName = document.getElementById("provo-name");
let pAddr = document.getElementById("provo-addr");
let pPhone = document.getElementById("provo-phone");
let pOrdinance = document.getElementById("provo-ordinance")

let fallsC = document.getElementById("if-closures");
let fallsS = document.getElementById("if-services");
let fName = document.getElementById("if-name");
let fAddr = document.getElementById("if-addr");
let fPhone = document.getElementById("if-phone");
let fOrdinance = document.getElementById("if-ordinance")

let slcC = document.getElementById("slc-closures");
let slcS = document.getElementById("slc-services");
let sName = document.getElementById("slc-name");
let sAddr = document.getElementById("slc-addr");
let sPhone = document.getElementById("slc-phone");
let sOrdinance = document.getElementById("slc-ordinance")

let URL = 'https://ericlewis83.github.io/assignments/templeinnproject/scripts/templeinfo.json';
var request = new XMLHttpRequest();

request.open('GET', URL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var templeData = request.response;
  boiseInfo(templeData);
  provoInfo(templeData);
  fallsInfo(templeData);
  slcInfo(templeData);

  bName.innerHTML = templeData[0].name;
  fName.innerHTML = templeData[1].name;
  pName.innerHTML = templeData[2].name;
  sName.innerHTML = templeData[3].name;


  bAddr.innerHTML = templeData[0].address;
  fAddr.innerHTML = templeData[1].address;
  pAddr.innerHTML = templeData[2].address;
  sAddr.innerHTML = templeData[3].address;

  bPhone.innerHTML = templeData[0].phone;
  fPhone.innerHTML = templeData[1].phone;
  pPhone.innerHTML = templeData[2].phone;
  sPhone.innerHTML = templeData[3].phone;

  bOrdinance.innerHTML = templeData[0].ordinances;
  fOrdinance.innerHTML = templeData[1].ordinances;
  pOrdinance.innerHTML = templeData[2].ordinances;
  sOrdinance.innerHTML = templeData[3].ordinances;  

  boiseS.innerHTML = templeData[0].services;
  fallsS.innerHTML = templeData[1].services;
  provoS.innerHTML = templeData[2].services;
  slcS.innerHTML = templeData[3].services;
  
}


function boiseInfo(obj){
let closures = obj[0].closures;

for(let i=0; i< closures.length; i++){
    let li = document.createElement("li");
    let content = document.createTextNode(closures[i]);
    li.appendChild(content);
    boiseC.append(li);

}
}

function fallsInfo(obj){
    let closures = obj[1].closures;
    for(let i=0; i< closures.length; i++){
        let li = document.createElement("li");
        let content = document.createTextNode(closures[i]);
        li.appendChild(content);
        fallsC.append(li);
    }
}
    function provoInfo(obj){
        let closures = obj[2].closures;
        for(let i=0; i< closures.length; i++){
            let li = document.createElement("li");
            let content = document.createTextNode(closures[i]);
            li.appendChild(content);
            provoC.append(li);
        }
    }
        function slcInfo(obj){
            let closures = obj[3].closures;
            for(let i=0; i< closures.length; i++){
                let li = document.createElement("li");
                let content = document.createTextNode(closures[i]);
                li.appendChild(content);
                slcC.append(li);
            }
        }
