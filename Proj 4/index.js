var P1_horizontal = 0;
var P1_vertical = 0;
var P2_horizontal = -495;
var P2_vertical = 0;
var Pew_horizontal = 0;
var Pew_vertical = 0;
var dist = 55;
var tempew = 0;
var x = 0;
objImage3 = document.getElementById("indicator");
objImage2 = document.getElementById("heading2")
objImage = document.getElementById("heading1");
pewImage = document.getElementById("pewpew");
pewImage.style.position = "relative";
objImage.style.position = "relative";
objImage2.style.position = "relative";
objImage3.style.position = "relative";
objImage2.style.right = -495+"px";
    document.addEventListener("keydown", function(event) {
        console.log(event.key)
        if (event.key == 'w') {
            if (P1_vertical<0){
            P1_vertical = P1_vertical+dist;
            objImage.style.bottom = P1_vertical + "px";
        }}
        else if (event.key == 's') {
            if (P1_vertical>-490){
            P1_vertical = P1_vertical-dist;
            objImage.style.bottom = P1_vertical + "px";
        }}
        else if (event.key == 'a') {
            if (P1_horizontal<0){
            P1_horizontal = P1_horizontal+dist;
            objImage.style.right = P1_horizontal + "px";
            }}
        else if (event.key == 'd') {
            if (P1_horizontal>-490){
            P1_horizontal = P1_horizontal-dist;
            objImage.style.right = P1_horizontal + "px";
        }  }

        console.log("Right P1_horizontal: "+P2_horizontal)
        console.log("P1_vertical Down: "+P2_vertical)          
   
    });
function computer_ai() {
        clearInterval(bullet)
        objImage2.style.bottom = P2_vertical + "px";
        objImage2.style.right = P2_horizontal + "px";
        Pew_horizontal = P2_horizontal
        Pew_vertical = P2_vertical+40
        tempew = Pew_horizontal
        setInterval(bullet,100)
        P2_vertical = Math.floor(Math.random() * -490);
        P2_horizontal = Math.floor((Math.random() * 510)+495)*-1;
        objImage3.style.bottom = P2_vertical + "px";
        objImage3.style.right = -970 + "px";
        
}
setInterval(computer_ai,2000)
function bullet(){
    if (Pew_horizontal<200){
    Pew_horizontal = Math.floor(Pew_horizontal-(tempew/50)) 
    pewImage.style.right = Pew_horizontal + 'px';
    pewImage.style.bottom = Pew_vertical + "px";
    if(Pew_horizontal+50>P1_horizontal && Pew_horizontal-50<P1_horizontal && Pew_vertical +50>P1_vertical && Pew_vertical-50<P1_vertical){
        console.log("true")
        x=x+1
        document.getElementById("points").innerHTML = "DEAD: "+x
    }
}}