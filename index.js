
var gamepattern = [];
var userpattern = [];
var buttonColours  = ["green", "red", "brown", "blue"];
var sad = new Audio("sounds/sad_truth.mp3");
var level = 0;
var count = 0;

var button = $("div.block");
var started = false;
$(document).keypress(()=>{
    nextSequence();
    started = true;
})

button.click((i)=>{
    var colorClicked = i.target["id"];
    flash(colorClicked);
    playAudio(colorClicked);
    userpattern.push(colorClicked);
    check(userpattern.length-1)
    console.log(userpattern);
})


function check(currentlevel){
    if(gamepattern[currentlevel] === userpattern[currentlevel]){
        if(userpattern.length === gamepattern.length){
            console.log("correct");
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else{
        var ran = Math.floor(Math.random() * 4);
        $("h1").text("You lost! Better luck next time");
        playAudio("wrong");
        /*if(ran === 1){
            sad.play();
        }
        else{
            playAudio("wrong");
        }*/
        setTimeout(() =>{
            location.reload();
        }, 5000)
    }
}

//This works
function flash(i){
    $("#" + i).fadeOut(300, () => {
        $("#" + i).fadeIn(100);
    });
}

function playAudio(i){
    var audio = new Audio("sounds/" + i + ".mp3");
    audio.play();
}

function nextSequence(){
    userpattern = [];
    level++;
    $("h1").text("level " + level);
    var random_number = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[random_number];
    gamepattern.push(randomChosenColour);
    console.log(gamepattern);

    flash(randomChosenColour);
}
