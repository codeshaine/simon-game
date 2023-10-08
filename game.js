//? this is the second version of code (this works as same as course projects)


let presscollection=[];
let randomnum;
let listner=true;
 let i=0,size;
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






$(document).on("keydown",function(){
    if(listner){
    presscollection.length=0;
randomnum=randomNum();
presscollection.push(randomnum);
switchCall(randomnum);
levelcount++;
  $("#level-title").text("Level "+levelcount);
    }
});


  $(".btn").on("click",function()
  {
    if(listner)
    listner=false;
let index= $(".btn").index(this);
if(index===presscollection[i]){
size=presscollection.length;
    i++;

switchCall(index);
if(i===size){
    levelcount++;
        if(listner)
listner=false;
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
        i=0;
playsound("wrong");
$("#level-title").text("Game Over, Press Any Key to Restart");
$("body").addClass("game-over");
setTimeout(function(){
    $("body").removeClass("game-over")
    if(!listner)
    listner=true;
},100);
}
});



