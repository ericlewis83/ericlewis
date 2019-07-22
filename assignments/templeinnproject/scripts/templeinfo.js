let boiseC = document.getElementById("boise-closures");
let bName = document.getElementById("boise-name");

let provoC = document.getElementById("provo-closures");
let pName = document.getElementById("provo-name");

let fallsC = document.getElementById("if-closures");
let fName = document.getElementById("if-name");

let slcC = document.getElementById("slc-closures");
let sName = document.getElementById("slc-name");


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

}


function boiseInfo(obj) {
    let closures = obj[1].closures;

    for (let i = 0; i < closures.length; i++) {
        let li = document.createElement("li");
        let content = document.createTextNode(closures[i]);
        li.appendChild(content);
        boiseC.append(li);

    }
}

function fallsInfo(obj) {
    let closures = obj[1].closures;
    for (let i = 0; i < closures.length; i++) {
        let li = document.createElement("li");
        let content = document.createTextNode(closures[i]);
        li.appendChild(content);
        fallsC.append(li);
    }
}

function provoInfo(obj) {
    let closures = obj[2].closures;
    for (let i = 0; i < closures.length; i++) {
        let li = document.createElement("li");
        let content = document.createTextNode(closures[i]);
        li.appendChild(content);
        provoC.append(li);
    }
}

function slcInfo(obj) {
    let closures = obj[3].closures;
    for (let i = 0; i < closures.length; i++) {
        let li = document.createElement("li");
        let content = document.createTextNode(closures[i]);
        li.appendChild(content);
        slcC.append(li);
    }
}