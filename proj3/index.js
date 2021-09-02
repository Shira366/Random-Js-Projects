var color = ["#AA0000", "#696969", "#7fe5f0", "#000000", "#5ac18e", "#C0C0C0","#DFFF00"]
var x = 0
function changeBackground() {
    if (x+1==color.length){
        x=0
    }
    document.body.style.background = color[x];
    document.getElementById("heading").style.color = color[color.length-x];
    x=x+1
 
}