'use strict';
let arr = ['usd', 'eur', 'aud', 'cad', 'chf', 'nzd', 'bgn'],
    main = document.querySelector('#result'),
    group1 = document.querySelector('.g1'),
    group2 = document.querySelector('.g2'),
    group3 = document.querySelector('.g3'),
    count1 = 0,
    count2 = 0,
    count3 = 0;


let obj;
window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'usd') continue;
        let jsonObj = new XMLHttpRequest();
        jsonObj.open('GET', `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${arr[i]}.json`, false);
        jsonObj.send();
        if (jsonObj.status != 200) {
            alert(jsonObj.status + ': ' + jsonObj.statusText); // пример вывода: 404: Not Found
        } else {
            obj = JSON.parse(jsonObj.responseText);
        }
        // main.innerHTML += `<h1>${obj[`${arr[i]}`]}</h1>`;

        if (obj[arr[i]] < 1) {
            count1++;
            group1.innerHTML +=
                `
            <div>
                <h1>1 USD</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        } else if (obj[arr[i]] >= 1 && obj[arr[i]] < 1.5) {
            count2++;
            group2.innerHTML +=
                `
            <div>
                <h1>1 USD</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        } else {
            count3++;
            group3.innerHTML +=
                `
            <div>
                <h1>1 USD</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        }


        // main.innerHTML+=
        // `
        // <div>
        //     <h1>1 USD</h1>
        //     <h1>=</h1>
        //     <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
        // </div>
        // `
    }
    group1.innerHTML += `<h2>Count: ${count1}</h2>`;
    group2.innerHTML += `<h2>Count: ${count2}</h2>`;
    group3.innerHTML += `<h2>Count: ${count3}</h2>`;
})

let list = document.getElementsByClassName('select-box__option');
let listsBox = document.getElementById('listsBox');
listsBox.onclick = function (event) {
    let targetId = 0,
        targetTxt = 'usd';
    for (let i = 0; i < arr.length; i++) {
        if (event.target.innerHTML.toLowerCase() == arr[i]) {
            group1.innerHTML = '',group2.innerHTML = '',group3.innerHTML = '',
            count1=0,count2=0,count3=0;
            targetId = i;
            targetTxt = arr[i]
        }

    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == targetTxt) continue;
        let jsonObj = new XMLHttpRequest();
        jsonObj.open('GET', `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${targetTxt}/${arr[i]}.json`, false);
        jsonObj.send();
        if (jsonObj.status != 200) {
            alert(jsonObj.status + ': ' + jsonObj.statusText);
        } else {
            obj = JSON.parse(jsonObj.responseText);
        }
        // main.innerHTML += `<h1>${obj[`${arr[i]}`]}</h1>`;
        if (obj[arr[i]] < 1) {
            count1++;
            group1.innerHTML +=
                `
            <div>
                <h1>1 ${targetTxt.toLocaleUpperCase()}</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        } else if (obj[arr[i]] >= 1 && obj[arr[i]] < 1.5) {
            count2++;
            group2.innerHTML +=
                `
            <div>
                <h1>1 ${targetTxt.toLocaleUpperCase()}</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        } else {
            count3++;
            group3.innerHTML +=
                `
            <div>
                <h1>1 ${targetTxt.toLocaleUpperCase()}</h1>
                <h1>=</h1>
                <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
            </div>
            `
        }
        // main.innerHTML+=
        // `
        // <div>
        //     <h1>1 ${targetTxt.toLocaleUpperCase()}</h1>
        //     <h1>=</h1>
        //     <h1>${obj[`${arr[i]}`]} ${arr[i].toLocaleUpperCase()}</h1>
        // </div>
        // `
    }
    group1.innerHTML += `<h2>Count: ${count1}</h2>`;
    group2.innerHTML += `<h2>Count: ${count2}</h2>`;
    group3.innerHTML += `<h2>Count: ${count3}</h2>`;
}