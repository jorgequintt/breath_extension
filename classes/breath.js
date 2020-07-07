var names = ["Breathe in", "Hold", "Breathe out", "Hold"];
var counter = 0;
setInterval(function () {
    document.title = "" + names[counter];
    if (counter == names.length - 1) {
        counter = 0;
    } else {
        counter = counter + 1;
    }
}, 4900);


