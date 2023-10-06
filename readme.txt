first go to the iteration 
array= 0 2 1


the thing we have to do this in order to complete the task is 

first random number hae to be genrated by pessing a key down event ok ...
push that into array

second we need a function to check the the array elemetns (clicks ) are smme as the index of the 
buttons that we pressed 

in order to do this we have to separete buttons
fistt way is to do a for loop which will incrase code complexity

//so we do this using index...


we have to check on each loop if the index that awe pressed is equal to the iterated 
element in the array.


for each index we have to check  so we put the for loop outside.. right 

then we have to put btn event on  each loop..



$(".btn").on("click",function()
    {
 let index= $(".btn").index(this);

 console.log(index);
 if(index==presscollection[i])
 switchCall(index);
else
playsound("wrong");
    }

    );










this is the main problme 
we can add elemtn to array later
after adding array we have to call this function to check the iterated elemetn is equakl to that elemet..




this code is kinda works i guess....😂

$(document).on("keydown",function(){
    // presscollection=[];
//       randomnum=randomNum();
// presscollection.push(randomnum);
console.log("start");
process();

})
let i=0;
function process(){


if(i===presscollection.length)
return ;


  $(".btn").on("click",function()
  {
let index= $(".btn").index(this);
if(index===presscollection[i])
    alert("your are correct");
    else
    {
    alert("fukk offf");
   
    }

i++;
  if(i===presscollection.length)
 console.log("game over") ;  


console.log(presscollection.length);
  });
}





now what i need to do is every time i have to reset the ined to zero 

do i have to take another index
doesnt that will make the code complex i dont know

what exactky are you doing

rename i as size
 now new i will iterate back to zero everytime the i reaches the size



 

$(document).on("keydown",function(){
presscollection=[];
size=0,i=0;
randomnum=randomNum();
      switchCall(randomnum);
presscollection.push(randomnum);
console.log(presscollection);
process();

})




function process(){
  $(".btn").on("click",function()
  {
let index= $(".btn").index(this);

if(index===presscollection[i]){
switchCall(index);
if(i===size){
 randomnum=randomNum();
presscollection.push(randomnum);
setTimeout(() => {
   switchCall(randomnum);
}, 400);
i=0;
size++;
 console.log(randomnum);
}
i++;

}
    else
    {
playsound("wrong")
$("body").addClass("game-over")
setTimeout(function(){
    $("body").removeClass("game-over")
},100)

return;

    }



  });
}


