var gamepattern = [];
var count = 0;
var buttonColours  = ["green", "red", "brown", "blue"];
var randomColourChoosen;
var sad = new Audio("sounds/sad_truth.mp3");

$(document).keypress((i) =>{
    if (i.key == "Enter"){
        start();
    }
});

function start(){
    count++;
    var i = 0;
    $("h1").text("Level " + count);
    randomColourChoosen = buttonColours[nextSequence()];
    flash(randomColourChoosen);
    gamepattern.push(randomColourChoosen);
    console.log(gamepattern);

    for(i = 0; i < gamepattern.length; i++){      
        $("div.block").click((event) => {
            var target;
            target = event.target["id"];
            if(check(target, gamepattern, i-1)){
                start();
            }
        });
    }
}

function nextSequence(){
    var random_number = Math.floor(Math.random() * 4);
    return random_number;
}

function flash(i){
    $("#" + i).fadeOut(300, () => {
        $("#" + i).fadeIn(100);
    });
}

function playAudio(i){
    var audio = new Audio("sounds/" + i + ".mp3");
    audio.play();
}

function check(event, gamepattern, pos){
    if(event == gamepattern[pos]){
        flash(event);
        playAudio(event);
        return true;
    }
}