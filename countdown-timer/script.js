const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('min');
const secondsElement = document.getElementById('seconds');

const newYears = "1 Jan 2022";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours; //formatTime(hours)
    minutesElement.innerHTML = minutes; //formatTime(minutes)
    secondsElement.innerHTML = seconds; //formatTime(seconds)
}

countDown();

setInterval(countDown, 1000);

// To show the zero
// function formatTime(time) {
//    return time < 10 ? (`0${time}`) : time;
//}

