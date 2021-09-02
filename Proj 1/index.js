let x = 1628054980836


function updateTime(){
    x=x-1000;
    var currentTime = new Date(x)
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var days = currentTime.getDate()
    if (days < 10){
        days = "0"+ days
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds< 10){
        seconds = "0" + seconds
    }
    var t_str = days+":"+ hours + ":" + minutes + ":"+ seconds +" ";
    document.getElementById('timer').innerHTML = t_str;
}
setInterval(updateTime, 1000);

var color = ["#AA0000", "#696969", "#7fe5f0", "#000000", "#5ac18e", "#C0C0C0","#DFFF00"]
var image = [
"url('https://images.unsplash.com/photo-1500111709600-7761aa8216c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1548661710-7f540c9c56d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1531825225561-5f89b02c992a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNjZW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1542692847287-8432313be7a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNjZW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')",
"url('https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjZW5lcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&h=920')"
] 
var a = 0
function changeBackground() {
    var eastercount = color.length-a
    var easteregg = "Reactor Meltdown In....... "+eastercount;
    document.getElementById('ulla').innerHTML = easteregg;
    document.getElementById("ulla").style.color = '#FF0000'
    document.getElementById('lol').innerHTML = "Curiosity Killed The Cat!"
    if (a==color.length){
        a=0
        document.getElementById('ulla').innerHTML = "Just Kidding LMAO!";
        document.getElementById('lol').innerHTML = "DO NOT TOUCH!"
    }
    document.body.style.background = image[a]
    document.getElementById("timer").style.color = color[a];
    document.getElementById("heading").style.color = color[eastercount];
    a=a+1
 
}