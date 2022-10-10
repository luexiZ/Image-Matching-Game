function initialize()
{
     
    
    score = document.getElementById("numOfClicks");
    comment = document.getElementById("comment");
    button = document.getElementById("button");
    cover = "Bthslogo.png";
    counter = 0;
    firstItem = 0;
    continuing = true;
    
    pic1 = document.getElementById("img1");
    pic2 = document.getElementById("img2");
    pic3 = document.getElementById("img3");
    pic4 = document.getElementById("img4");
    pic5 = document.getElementById("img5");
    pic6 = document.getElementById("img6");
    pic7 = document.getElementById("img7");
    pic8 = document.getElementById("img8");
    pic9 = document.getElementById("img9");
    pic10 = document.getElementById("img10");
    pic11 = document.getElementById("img11");
    pic12 = document.getElementById("img12");
    pic13 = document.getElementById("img13");
    pic14 = document.getElementById("img14");
    pic15 = document.getElementById("img15");
    pic16 = document.getElementById("img16");
    pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16];
    for(let i = 0; i < 16; i++)
    {
        pics[i].src = cover;
    }
    randomPosition();
    display();
    
}

function randomPosition()
{
    var placement = [ "1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
    for(let i = 0; i < 16; i++)
    {
        var k = randomNumberGenerator(placement.length -1 );
        pics[i].hiddenSrc = ""+ placement[k] + ".png";
        placement.splice(k, 1);
    }	
}

function randomNumberGenerator(max){
    return Math.floor(Math.random()*max);
}

function flip(num)  
{	 
    counter++; 
    num.src = num.hiddenSrc;
    
    if( counter % 2 == 1)
    {
        firstItem = num;
    }
    else
    {
        match(firstItem, num);
        check();
    }
     
    display();
}

function match(num1, num2)
{
    if(num1.src === num2.src)
    {
        num1.onclick = "";
        num2.onclick = "";
    }
    else
    {
        setTimeout(function(){
        num1.src = cover;
        num2.src = cover;}, 500);
    }
    check();
     
}

function check()
{			   
    var count = 0;
    for (var i=0; i<16; i++)
    {
        if (pics[i].src.match(cover))
        {
            count++;
        }
    }
    if (count == 0)
    {
        continuing = false;
    }
     

}
        
function display()
{
    if(!continuing)
    {
        var reaction = "";
        if(counter == 16)
        {
            reaction = "Wow, that was remarkable!"
        }
        else if(counter > 16 && counter < 32)
        {
            reaction = "Not bad, how about getting a better score than " + counter + "? You got this!";
        }
        else
        {
            reaction = "Hmm, how's your day going? Cuz you can do better than this."
        }
        comment.innerHTML = reaction;
        button.innerHTML = "replay";
    }
     
     
    score.innerHTML = "Current Score: " + counter;
}