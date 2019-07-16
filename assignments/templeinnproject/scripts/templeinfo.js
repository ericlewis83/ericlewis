let info;
const data = fetch('\scripts\templeinfo.json').then(res => res.json()).then(data => info = data)

var sectionSe = document.getElementById('boise');
var sectionSp = document.getElementById('idahofalls');
var sectionCr = document.getElementById('provo');
var sectionPo = document.getElementById('saltlake');
var requestURL = 'assignments\templeinnproject\scripts\templeinfo.json';

let info;
const data = fetch("/scripts/templeinfo.json").then(res => res.json()).then(data => info = data)

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeInfo = request.response;
    console.log(templeInfo);
    populateBoise(templeInfo);
    populateIdahoFalls(templeInfo);
    populateProvo(templeInfo);
    populateSaltLake(templeInfo);
}
function populateBoise(templeInfo) {
    var templeSe = templeInfo['temples'];
   
    for (var i = 0; i < templeSe.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeSe[0].name ==='Boise') {
            myH2.textContent = templeSe[0].name;
            myPara1.textContent = 'Address: ' + templeSe[0].address;
            myPara2.textContent = 'Telephone: ' + templeSe[0].telephone;
            myPara3.textContent = 'E-mail: ' + templeSe[0].email;
            myPara4.textContent = 'Services: ' + templeSe[0].services;
            myPara5.textContent = 'History: ' + templeSe[0].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeSe[0].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeSe[0].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeSe[0].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionSe.appendChild(myArticle);
}

function populateIdahoFalls(templeInfo) {
    var templeSp = templeInfo['temples'];
   
    for (var i = 0; i < templeSp.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeSp[1].name ==='IdahoFalls') {
            myH2.textContent = templeSp[1].name;
            myPara1.textContent = 'Address: ' + templeSp[1].address;
            myPara2.textContent = 'Telephone: ' + templeSp[1].telephone;
            myPara3.textContent = 'E-mail: ' + templeSp[1].email;
            myPara4.textContent = 'Services: ' + templeSp[1].services;
            myPara5.textContent = 'History: ' + templeSp[1].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeSp[1].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeSp[1].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeSp[1].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionSp.appendChild(myArticle);
}
function populateProvo(templeInfo) {
    var templeCr = templeInfo['temples'];
   
    for (var i = 0; i < templeCr.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templeCr[2].name ==='Provo') {
            myH2.textContent = templeCr[2].name;
            myPara1.textContent = 'Address: ' + templeCr[2].address;
            myPara2.textContent = 'Telephone: ' + templeCr[2].telephone;
            myPara3.textContent = 'E-mail: ' + templeCr[2].email;
            myPara4.textContent = 'Services: ' + templeCr[2].services;
            myPara5.textContent = 'History: ' + templeCr[2].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templeCr[2].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templeCr[2].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templeCr[2].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionCr.appendChild(myArticle);
}
function populateSaltLake(templeInfo) {
    var templePo = templeInfo['temples'];
   
    for (var i = 0; i < templePo.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');

        if (templePo[3].name ==='Salt Lake') {
            myH2.textContent = templePo[3].name;
            myPara1.textContent = 'Address: ' + templePo[3].address;
            myPara2.textContent = 'Telephone: ' + templePo[3].telephone;
            myPara3.textContent = 'E-mail: ' + templePo[3].email;
            myPara4.textContent = 'Services: ' + templePo[3].services;
            myPara5.textContent = 'History: ' + templePo[3].history;
            myPara6.textContent = 'Ordinance Schedule: ' + templePo[3].ordinanceSchedule;
            myPara7.textContent = 'Session Schedule: ' + templePo[3].sessionSchedule;
            myPara8.textContent = 'Temple Closure Schedule: ' + templePo[3].templeClosures;
        }
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    sectionPo.appendChild(myArticle);
}