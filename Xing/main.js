$(document).ready(function () {
    $('#fullpage').fullpage();
});

var question="Start?"

function startGame(){
    $('#arc').show();
    $('.question').html(question);
}

function binarySearch(){
    var lo = 1;
    var hi = 255;
    var prevmid = 0 ;
    while(lo <= hi){
        var mid = Math.floor((lo + hi) / 2);
        if(mid == prevmid){
            hi = mid;
            break;
        }
        question = "Is your number > " + mid + "?";
        var answer = confirm(question);
        if(answer){
            lo = mid+1;
        }else{
            hi = mid;
        }
        prevmid = mid;
    }
    $('#arc').show();
    $('.question').html("Bingo!! Your number is " + hi + ' !<br> Want to play the game again ?');
    question = "Start?"    
}


function Yass(){
    if(question == "Start?"){
        $('#arc').hide();
        binarySearch();
    }
}

window.onload = startGame;