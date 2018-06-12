var data = "Pritish Thakkar"
var curr_idx = 0;
var cursor = '|';
var foo=1;

function typewriter(){
    var destination = document.getElementById("typeitbaby");
    destination.innerHTML = data.substring(0, curr_idx);
    if(data.length == curr_idx){
        blink();
        show();
        return;
    }else{
        destination.innerHTML = data.substring(0, curr_idx) + cursor;
    }
    curr_idx++;
    setTimeout("typewriter()", 150);
}

function show(){
    $("#educationId").slideDown(1000);
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