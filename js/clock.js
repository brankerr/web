const clock = document.querySelector("#clock");
const todayDate = document.getElementById('date')

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);
    const dayName = date.toLocaleString('en-us', {weekday: 'short'});
    const day = String(date.getDate());
    const month = date.toLocaleString('default', {month : 'long'});
    todayDate.innerText = `${month} ${day}일 ${dayName}.`
}

getClock();
setInterval(getClock, 1000);