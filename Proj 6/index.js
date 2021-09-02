
var x=0; 
function start(){
    x=x+1
    draw();
}
setInterval(start,16.6)
function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x*10, 200*(Math.cos(x*10)**9) +750);
    ctx.lineTo((x+1)*10, 200*(Math.cos((x+1)*10)**9) +750);
    ctx.lineWidth = 1;
    ctx.moveTo(x*10, 200*(Math.cos(x*10)**9) +800);
    ctx.lineTo(x/x**2, 4*x);
    ctx.stroke();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(x*10, (Math.sin(x*10)) +750);
    ctx.lineTo((x+1)*10, (Math.sin((x+1)*10)) +750);
    ctx.lineWidth = 1;
    ctx.moveTo(x*10, (Math.sin(x*10)**9) +800);
    ctx.lineTo(x/x**2, 4*x);
    ctx.stroke();
    console.log(x)
    if (x>360){document.getElementById('hills').innerHTML="Printing"}
}
