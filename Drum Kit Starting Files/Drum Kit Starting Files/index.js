



for(var i=0; i<document.querySelectorAll("button").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
   
    var buttonInnerhtml = this.innerHTML
    makeSound(buttonInnerhtml);
    addAnimation(buttonInnerhtml)
    
})
              
}
document.addEventListener("keypress",function(event){
    makeSound(event.key)
    addAnimation(event.key)
})

function makeSound(buttonInnerhtml){
    switch(buttonInnerhtml){
        case "w":
           var w = new Audio("./sounds/crash.mp3")
           w.play();
        break;
        case "a":
            var a = new Audio("./sounds/kick-bass.mp3")
            a.play();
        break;
       }

}


function addAnimation (button){
   
   var this2  =  document.querySelector("."+button)
  
    this2.classList.add("pressed");
    
   setTimeout(function(){
    this2.classList.remove("pressed")
   },100)


}
