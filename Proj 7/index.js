var box;
var jumper = 0;
var a = 1620;
var b = 2020;
var c = 2420;
var d = 2820;
var x = 100;
var y = 340;
var jumper_counter = 0;
var rnd_a = (Math.random()*381)+300;
var rnd_b = (Math.random()*381)+300;
var rnd_c = (Math.random()*381)+300;
var rnd_d = (Math.random()*381)+300;
var score = 0;


function retry_game(){
    canvasNode.width  = 0; // in pixels
    canvasNode.height = 0;
    var score_display = document.createElement("h1");
    var button = document.createElement("button");
    button.id = 'delete'
    score_display.id = 'score'
    button.className = 'button'
    score_display.style.bottom = 100 + "px";
    score_display.style.left = 800 + "px";
    button.style.bottom = 300 + "px";
    button.style.left = 800 + "px";
    button.innerHTML = "Retry";
    score_display.innerHTML = "Final Score: " + score;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(score_display);
    body.appendChild(button);
    

    
    button.addEventListener ("click", function() {
        var element = document. getElementById('delete');
        element. parentNode. removeChild(element);
        element = document. getElementById('score');
        element. parentNode. removeChild(element);
        retry();
    
})}


function gameStart(){
    var element = document. getElementById('dele');
    if(typeof(element) != 'undefined' && element != null){
        element. parentNode. removeChild(element);
    }
    var element = document. getElementById('score');
    if(typeof(element) != 'undefined' && element != null){
        element. parentNode. removeChild(element);
    }
    bg()
}

function retry(){
    score = 0;
    jumper = 0;
    a = 1620;
    b = 2020;
    c = 2420;
    d = 2820;
    x = 100;
    y = 340;
    jumper_counter = 0;
    gameStart()
}

const canvasNode = document.getElementById('canvas');

document.addEventListener("keydown", function(event) {
    if (event.key == ' ') {    
        jumper = 1
    }
})

function bg(){
    
    box = setInterval(draw,16.6)
    
}


function draw() {
    const canvas = document.querySelector('#canvas');
    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    canvasNode.width  = 1520; // in pixels
    canvasNode.height = 680;
    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    a = a-2
    b = b-2
    c = c-2
    d = d-2
  
    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 680);
    ctx.moveTo(0,0);
    ctx.lineTo(1520,0);
    ctx.moveTo(0, 680);
    ctx.lineTo(1520, 680);
    ctx.moveTo(1520, 680);
    ctx.lineTo(1520,0);

    function player(){
        x=x
        y=y+4
        if ((y+50)>=680){
            clearInterval(box)
            retry_game()
        }
        if ((y)<=0){
            clearInterval(box)
            retry_game()
        }
        
        function gameEnd(z,w){
            if (((x+50)>=(z-100) & (y<=w-200) & (x <= z)) | ((x+50)>=(z-100) & (y+50>=w) & (x <= z)))
            {
                clearInterval(box)
                retry_game()
            }

        }
        
        gameEnd (a,rnd_a)
        gameEnd (b,rnd_b)
        gameEnd (c,rnd_c)
        gameEnd (d,rnd_d)


        ctx.moveTo(x+50 , y);//right
        ctx.lineTo(x+50 , y+50);//right
        ctx.moveTo(x , y);//left
        ctx.lineTo(x , y+50);//left
        ctx.moveTo(x , y);//top
        ctx.lineTo(x+50 , y);//top
        ctx.moveTo(x , y+50);//bottom
        ctx.lineTo(x+50 , y+50);//bottom
    }
    player()
    jump()

    function jump(){
        if (jumper == 1){
            y = y-20
            jumper_counter = jumper_counter + 1;
            if (jumper_counter == 6) {
                jumper_counter = 0
                jumper = 0
            }
        }
    }
    
    function score_counter(){
        score = score+1
        ctx.font = "30px Arial";
        ctx.fillText("Score: "+(score), 10, 50);

    }
    score_counter()
    function pillars (a,b){
        //bottom
        ctx.moveTo(a, b);//right
        ctx.lineTo(a, 680);//right
        ctx.moveTo(a-100,b);//left
        ctx.lineTo(a-100,680);//left
        ctx.moveTo(a, b);//top
        ctx.lineTo(a-100, b);//top
        ctx.moveTo(a, 680);//bottom
        ctx.lineTo(a-100, 680);//bottom

        //top
        ctx.moveTo(a, b-200);//right
        ctx.lineTo(a, 0);//right
        ctx.moveTo(a-100, b-200);//left
        ctx.lineTo(a-100,0);//left
        ctx.moveTo(a, b-200);//top
        ctx.lineTo(a-100, b-200);//top
        ctx.moveTo(a, 0);//bottom
        ctx.lineTo(a-100, 0);//bottom
    }

    pillars(a,rnd_a);
    pillars(b,rnd_b);
    pillars(c,rnd_c);
    pillars(d,rnd_d);
    

    
    if(a<=-1){
        a=1620
        rnd_a = (Math.random()*381)+300;
    }
    if(b<=-1){
        b=1620
        rnd_b = (Math.random()*381)+300;
    }
    if(c<=-1){
        c=1620
        rnd_c = (Math.random()*381)+300;
    }
    if(d<=-1){
        d=1620
        rnd_d = (Math.random()*381)+300;
    }
   
    ctx.stroke();
}
    
