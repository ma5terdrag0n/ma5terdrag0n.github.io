var data = "Pritish Thakkar"
var curr_idx = 0;
var cursor = '|';
var foo=1;
var startprogressbar=0;
var counter = 5;
// Typewriter effect in name
function typewriter(){
    if(startprogressbar==0){
        startprogressbar=1;
        startIt();
    }
    var destination = document.getElementById("typeitbaby");
    destination.innerHTML = data.substring(0, curr_idx);
    if(data.length == curr_idx){
        blink();
        setTimeout("show()", 6000);
        return;
    }else{
        destination.innerHTML = data.substring(0, curr_idx) + cursor;
    }
    curr_idx++;
    setTimeout("typewriter()", 150);
}

// Hide Hacked and show all the tables and data
function show(){
    $(".tomjerry").hide();
    $("#educationId").fadeIn(3000);
    $('#cpId').fadeIn(3000);
    $('#bloggingId').fadeIn(3000);
    $('#weId').fadeIn(3000);
}


// Progress bar code
function startIt(){
    setInterval(startBlinking, 10);
    var elem = document.getElementById("pbar");
    var width = 1;
    var id = setInterval(frame, 16);
    function frame() {
        if (width >= 100) {
            setTimeout("blinkHack()", 600);
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

// remove "Hacking.." and adds Hacked
function blinkHack(){
    var elem = document.getElementById("pbar");
    elem.innerHTML = '';
    elem.style.width = 0 + '%';
    var temp = document.getElementById('hacked');
    temp.style.fontSize = "50px";
    temp.innerHTML = "Hacked!";
    explode();
}

function explode(){
    var x = document.getElementById('explode');
    x.innerHTML = "Exploding database in " + counter + "s";
    counter--;
    setTimeout("explode()", 1000);
}

// This blinks "Hacked exploding db" string.
function startBlinking(){
    $('#hacked').fadeOut(500);
    $('#hacked').fadeIn(500);
}  

// Blink the cursor after name
function blink(){
    var destination = document.getElementById("typeitbaby");
    if(foo%2==0){
        destination.innerHTML = data.substring(0, curr_idx) + cursor;
        foo=1;
    }else{
        destination.innerHTML = data.substring(0, curr_idx) + ' ';
        foo=0;
    }
    setTimeout("blink()", 400);
}

// What to do when window loads :P
window.onload = typewriter;