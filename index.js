time = true;
var gamepattern = [];
var buttonColours  = ["green", "red", "brown", "blue"];
var randomColourChoosen = buttonColours[nextSequence()];
gamepattern.push(randomColourChoosen);

flash(randomColourChoosen);

console.log(randomColourChoosen);

function nextSequence(){
    var random_number = Math.floor(Math.random() * 4);
    return random_number;
}

function flash(i){
    $("#" + i).fadeOut(100, () => {
        $("#" + i).fadeIn(100);
    });
}