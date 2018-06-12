var data = "Pritish Thakkar"
var curr_idx = 0;
var cursor = '|';
var foo=1;
var startprogressbar=0;

function typewriter(){
    if(startprogressbar==0){
        startprogressbar=1;
        startIt();
    }
    var destination = document.getElementById("typeitbaby");
    destination.innerHTML = data.substring(0, curr_idx);
    if(data.length == curr_idx){
        blink();
        setTimeout("show()", 4000);
        return;
    }else{
        destination.innerHTML = data.substring(0, curr_idx) + cursor;
    }
    curr_idx++;
    setTimeout("typewriter()", 150);
}

function show(){
    $(".tomjerry").hide();
    $("#educationId").slideDown(1000);
    $('#cpId').slideDown(1000);
}

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

function blinkHack(){
    var elem = document.getElementById("pbar");
    elem.innerHTML = '';
    elem.style.width = 0 + '%';
    var temp = document.getElementById('hacked');
    temp.style.fontSize = "50px";
    temp.innerHTML = "Hacked!<br>Exploding db";
    
}

function startBlinking(){
    $('#hacked').fadeOut(500);
    $('#hacked').fadeIn(500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

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

window.onload = typewriter;