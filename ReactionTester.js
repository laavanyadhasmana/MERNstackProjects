var start = new Date().getTime(); //to know the start time 
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; //generates random number->the random numbers between 0 to 15.99 when floor applied turn to 0 to 15
    } //loops to pick the characters of the letters 
    return color;
} //function to generate random colors

function move() {
    var left; 
    var top;
    var wh;
    left = Math.random()*300; 
    right = Math.random()*300; 
    top = Math.random()*300;
    wh = ((Math.random()*400)+100); //random width and height generated with a minimum of 100 
    document.getElementById("shape").style.left = left;  //on click moves to left with random padding
    document.getElementById("shape").style.top = top; //on click moves to top with random padding
    document.getElementById("shape").style.width = wh; //on click sets a random width 
    document.getElementById("shape").style.height = wh; //on click sets a random height 
    document.getElementById("shape").style.display = "block"; //block display
    document.getElementById("shape").style.backgroundColor = getRandomColor(); //function called
    start = new Date().getTime(); //start time
}
move(); //function called
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none"; //block vanishes
    var end = new Date().getTime(); //end time
    var timeTaken = (end - start)/1000;
    alert(timeTaken); 
    move();
}