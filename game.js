let presscollection=[];
let level=0;

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
    presscollection=[];
      randomnum=randomNum();
      switchCall(randomnum);
presscollection.push(randomnum);
console.log("start "+randomnum);
process();

})

function process(){
let i=0;

  $(".btn").on("click",function()
  {
let index= $(".btn").index(this);
if(index===presscollection[i]){
switchCall(index);
 randomnum=randomNum();


presscollection.push(randomnum);
setTimeout(() => {
   switchCall(randomnum);
}, 400);
 
 console.log(randomnum);

}
    else
    {
playsound("wrong")
$("body").addClass("game-over")
setTimeout(function(){
    $("body").removeClass("game-over")
},100)
i=0;
    return;
    }
    if(i<presscollection.length)
i++;
else
return;

  });
}


//im in git experimebt branch  not succeded
