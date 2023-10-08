//? this is the main branch (codeshaine logic)

let presscollection=[];
let randomnum;
let listner=true;
let levelcount=0;


// for playing audio
function playsound(song){
    let audio=new Audio("sounds/"+song+".mp3");
    audio.play();
}
// for geerating random number
function randomNum(){
return Math.floor((Math.random()*4));
}


// for the animation and spund part
function buttonpressed(audio)
{
    $("#"+audio).addClass("pressed");
     setTimeout(()=>{
      $("#"+audio).removeClass("pressed");
   },100)
     playsound(audio);
}

//for using switch statement
function switchCall(choice){
switch(choice){
    case 0:
        buttonpressed("green")
        break;
        case 1:
            buttonpressed("red");
            break;
            case 2:
                buttonpressed("yellow");
                break;
                case 3:
                    buttonpressed("blue");
                    break;
                    default:
                        console.log("error");
                        break;
}
}



//main work
$(document).on("keydown",function(){
    if(listner){
randomnum=randomNum();
presscollection.push(randomnum);
switchCall(randomnum); 
levelcount++;
$("#level-title").text("Level "+levelcount);
$(".btn").on("click");
process();
    }
});




function process(){
    let i=0,size=presscollection.length;
    if(listner)
listner=false;
  $(".btn").on("click",function()
  {
let index= $(".btn").index(this);
if(index===presscollection[i]){
size=presscollection.length;
    i++;
switchCall(index);
if(i===size){
    levelcount++;
 randomnum=randomNum();
presscollection.push(randomnum);
setTimeout(() => {
   switchCall(randomnum);
    $("#level-title").text("Level "+levelcount);
}, 600);
i=0;
}
}
    else
    {
        presscollection.length=0;
        size=presscollection.length;
        levelcount=0;
$("#level-title").text("Game Over, Press Any Key to Restart");
playsound("wrong");
$("body").addClass("game-over");
setTimeout(function(){
    $("body").removeClass("game-over")
      listner=true;
      $(".btn").off("click");
},100);
}
});
}


