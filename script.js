// XMAS COUNTDOWN

let xDays = document.getElementById('xday');
let xHours = document.getElementById('xhour');
let xMinutes = document.getElementById('xminute');
let xSeconds = document.getElementById('xsecond');
let xH2 = document.querySelector('h2');

const Xmas = new Date("Dec 25, 2022 00:00:00").getTime();

getXmas();

function getXmas() {
    let currentTime = new Date().getTime();
    console.log(currentTime, Xmas);
    let difference = Xmas - currentTime;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const d = Math.floor(difference / day);
    console.log(d);
    const h = Math.floor(difference % day / hour);
    console.log(h);
    const m = Math.floor(difference % hour / minute);
    console.log(m);
    const s = Math.floor(difference % minute / second);
    console.log(s);

    xDays.innerText = d;
    xHours.innerText = h;
    xMinutes.innerText = m;
    xSeconds.innerText = s;
    setTimeout(getXmas, 1000)

    if (difference < 0) {
        console.log(0.2 + 0.1);
        xH2.textContent = "YAY!!! Merry Christmas!";
    }
}




// NEW YEAR COUNTDOWN

let newDays = document.getElementById('day');
let newHours = document.getElementById('hour');
let newMinutes = document.getElementById('minute');
let newSeconds = document.getElementById('second');


const newYear = new Date("Jan 1, 2023 00:00:00").getTime();

newCountdown();

function newCountdown() {                   
    let present = new Date().getTime();
    console.log(present, newYear);
    let gap = newYear - present;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const Dday = Math.floor(gap / day)
    console.log(Dday);
    const Dhour = Math.floor(gap % day / hour);
    console.log(Dhour);
    const Dminute = Math.floor(gap % hour / minute);
    console.log(Dminute);
    const Dsecond = Math.floor(gap % minute / second);
    console.log(Dsecond);

    newDays.innerText = Dday;
    newHours.innerText = Dhour;
    newMinutes.innerText = Dminute;
    newSeconds.innerText = Dsecond;
    setTimeout(newCountdown, 1000)
}