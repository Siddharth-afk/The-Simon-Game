time = true;
var list = [];
var count = 0;
var green = 0;
var red = 1;
var brown = 2;
var blue = 3;

while(time){
    var num = Math.floor(Math.random() * 4);
    list.push(num);

    $("button#" + list[count] + " .block").css("background-color", "red");
    setInterval(function(){
        $("button#" + list[count] + " .block").remove();
    }, 300);
    count++;


    if(count == 2){
        time = false;
    }
}


/*$(document).keypress(function(i){
    $("h1").text(i.key);
})

$("button#green").click(function(){
    console.log("a");
})

$("button#red").click(function(){
    console.log("b");
})

$("button#brown").click(function(){
    console.log("c");
})


$("button#blue").click(function(){
    console.log("d ");
})*/