window.addEventListener('resize', function() {
    var titles = document.getElementsByClassName('titles');
    for(var i = 0; i < titles.length; i++) {
        if(window.innerWidth < 1500) {
            titles[i].style.marginRight = '5vh';
        } else {
            titles[i].style.marginRight = '72vh';
        }
    }
});

var counter = 1;
var interval = setInterval(autoSlide, 4000);

function autoSlide() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5) {
        counter = 1;
    }
}

function setCounter(value) {
    counter = value;
    clearInterval(interval);
    interval = setInterval(autoSlide, 4000);
}