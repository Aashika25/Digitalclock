var hour_display = document.querySelector('.hd');
var min_display = document.querySelector('.md');
var sec_display = document.querySelector('.sd');
var ses = document.querySelector('.Meridian')
function current_time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM"

    if (hours < 10) {
        hours = "0" + hours;
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours >= 12) {
        session = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }

    var time_string = hours + ":" + minutes + ":" + seconds + " " + session;
    hour_display.textContent = hours;
    min_display.innerHTML = minutes;
    sec_display.innerHTML = seconds;
    ses.innerHTML = session;
    setTimeout("current_time()", 1000);

}
current_time();



var s = document.querySelector('.settime')
var one = document.querySelector('.class1');
var two = document.querySelector('.class2');
var three = document.querySelector('.class3');
var i = document.querySelector('.morn-image');
var j = document.querySelector('.afternoon-image');
var k = document.querySelector('.night-image')
var main = document.querySelector('.wish')
var default_image = document.querySelector('.default');
var mrng, hour1, afternoon, night;
function demo() {

    var newdate = new Date();
    hour1 = newdate.getHours();
    mrng = document.querySelector('#waketime').value;
    one.innerHTML = mrng;
    afternoon = document.querySelector('#lunchtime').value;
    two.innerHTML = afternoon;
    night = document.querySelector('#nighttime').value;
    three.innerHTML = night;


    if (one.textContent == hour1) {
        default_image.style.display = "none";
        main.innerHTML = "GOOD MORNING !!"
        i.setAttribute('src', 'https://t3.ftcdn.net/jpg/02/10/07/22/360_F_210072276_HC7EAxIRWV4JIRuPLi9sgTmxmqGILX8T.jpg')
        i.style.marginTop = "-100px";
        i.width = '500';

    }


    if (two.textContent == hour1) {
        default_image.style.display = "none";
        main.innerHTML = "GOOD AFTERNOON !!"
        j.setAttribute('src', 'lunch_image.png');
        j.width = '450';
        j.style.marginTop = '-100px';
        j.style.backgroundColor = "white";
    }


    if (three.textContent == hour1) {
        default_image.style.display = "none";
        main.innerHTML = "GOOD NIGHT !!";
        k.setAttribute('src', 'https://thumbs.dreamstime.com/b/good-night-concept-text-moon-white-wooden-background-top-view-dreams-153325578.jpg')
        k.width = '450';
        k.style.marginTop = '-70px';
    }

    var arr = new Array(3);
    arr[0] = one.textContent;
    arr[1] = two.textContent;
    arr[2] = three.textContent;
    if ((arr[0] == hour1) && (arr[1] == hour1) && (arr[2] == hour1)) {
        default_image.style.display = "none";
        i.style.display = "none";
        j.style.display = "none";
        main.innerHTML = "GOOD NIGHT !!";
        k.setAttribute('src', 'https://thumbs.dreamstime.com/b/good-night-concept-text-moon-white-wooden-background-top-view-dreams-153325578.jpg')
        k.width = '450';
        k.style.marginTop = '-70px';
    }
    else if ((arr[0] == hour1) && (arr[1] == hour1)) {
        default_image.style.display = "none";
        i.style.display = "none";
        k.style.display = "none";
        main.innerHTML = "GOOD AFTERNOON !!"
        j.setAttribute('src', 'lunch_image.png');
        j.width = '450';
        j.style.marginTop = '-100px';
        j.style.backgroundColor = "white";
    }
    else if ((arr[1] == hour1) && (arr[2] == hour1)) {
        default_image.style.display = "none";
        i.style.display = "none";
        j.style.display = "none";
        main.innerHTML = "GOOD NIGHT !!";
        k.setAttribute('src', 'https://thumbs.dreamstime.com/b/good-night-concept-text-moon-white-wooden-background-top-view-dreams-153325578.jpg')
        k.width = '450';
        k.style.marginTop = '-70px';
    }
    else if ((arr[0] == hour1) && (arr[2] == hour1)) {
        default_image.style.display = "none";
        i.style.display = "none";
        j.style.display = "none";
        main.innerHTML = "GOOD NIGHT !!";
        k.setAttribute('src', 'https://thumbs.dreamstime.com/b/good-night-concept-text-moon-white-wooden-background-top-view-dreams-153325578.jpg')
        k.width = '450';
        k.style.marginTop = '-70px';
    }



}

s.addEventListener("click", demo)


