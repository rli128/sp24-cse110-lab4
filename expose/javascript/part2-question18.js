function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}


printTime();

let intervalId = setInterval(printTime, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 3000)