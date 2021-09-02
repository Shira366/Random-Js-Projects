var P1_horizontal = 0;
var P1_vertical = 0;
var dist = 20;
var pos =0;
var chara_id = 0;
var charas = ["https://www.pngmart.com/files/7/Human-Transparent-Images-PNG.png",
"https://pngimg.com/uploads/cow/cow_PNG2127.png",
"https://toppng.com/uploads/preview/football-png-pic-11527059763pcdlxufm0r.png",
"https://w7.pngwing.com/pngs/682/499/png-transparent-graphy-play-educational-toys-child-child-game-people-toddler.png",
"https://www.searchpng.com/wp-content/uploads/2019/02/Suzuki-Gixxer-PNG-Bike-PNG-Image.png",
"https://toppng.com/uploads/preview/feather-11523103768bnwn1ejkjq.png",
"https://www.pinclipart.com/picdir/middle/226-2269496_step-ladder-png-download-image-clipart.png"
] 
var charas_mass =[
    88,260,8.5,15,180,2.5,20
]
objImage = document.getElementById("heading1");
objImage.style.position = "relative";

document.addEventListener("keydown", function(event) {
    console.log(event.key)
    if (event.key == 'w') {
        if (P1_vertical<0){
        P1_vertical = P1_vertical+dist;
        objImage.style.bottom = P1_vertical + "px";
    }}
    else if (event.key == 's') {
        if (P1_vertical>0){
        P1_vertical = P1_vertical-dist;
        objImage.style.bottom = P1_vertical + "px";
    }}
    else if (event.key == 'a') {
        if (P1_horizontal<-20){
        P1_horizontal = P1_horizontal+dist;
        objImage.style.right = P1_horizontal + "px";
        }}
    else if (event.key == 'd') { 
        console.log(P1_horizontal)
        if (P1_horizontal>-420){
        P1_horizontal = P1_horizontal-dist;
        objImage.style.right = P1_horizontal + "px";
    }  }
});
function next_chara(){
    chara_id=chara_id+1
    if (chara_id==charas.length){
        chara_id = 0}
    console.log(chara_id)
    objImage.src = charas[chara_id]
    pos =0
    objImage.style.top =pos+'px';
}
function prev_chara(){
    chara_id=chara_id-1
    if (chara_id==-1){
        chara_id = charas.length-1} 
    console.log(chara_id)
    objImage.src= charas[chara_id]
    pos =0
    objImage.style.top =pos+'px';
}
function start(){
id = setInterval(frame, 1)
}

function frame (){
    if ((pos*(charas_mass[chara_id]*9.8)/100) >= 450) {
        clearInterval(id);
      } else {
        pos++; 
        objImage.style.top = pos*(charas_mass[chara_id]*9.8)/100 + 'px';  
      }
}