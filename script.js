const numberHours = document.querySelector('.number-hours');
const barSeconds =document.querySelector('.bar-seconds');


const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

const numberElements = [];
const barElements=[]

for(let i=1; i<=12; i++){

    numberElements.push(
        `<span style="--index:${i}">
        <p>
        ${i}
        </p>
        </span>`
    )
}

console.log(numberElements);


numberHours.insertAdjacentHTML("afterbegin", numberElements.join(""));

console.log(numberElements);

for(let i=1; i<=60; i++){

    barElements.push(
        `<span style="--index:${i}">
        <p>
        </p>
        </span>`
    )
}

console.log(barElements);

barSeconds.insertAdjacentHTML("afterbegin", barElements.join(""));

console.log(barElements);


function getCurrentTime(){

    let date = new Date();

    let currentHours=date.getHours();
    let currentMinutes=date.getMinutes();
    let currentSeconds=date.getSeconds();


    handHours.style.transform = `rotate(${currentHours *30 + currentHours / 2}deg)`;

    handMinutes.style.transform = `rotate(${currentMinutes *6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds *6}deg)`;
}


getCurrentTime()

setInterval(getCurrentTime,1000)
