
    var randomNumber1 = Math.floor(Math.random() * 6) + 1

    var imageString1 = "images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", imageString1);

 
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageString2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", imageString2);


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "PLayer 1 WIns"
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML ="Draw"
    }
    else {
        document.querySelector("h1").innerHTML ="Player 2 WIns"
    }