let counter = 0;
const timeId = setInterval(() => {
        counter++;
    console.log(counter);
    if (counter > 10) {
        clearInterval(timeId);
        
    }
}, 1000);