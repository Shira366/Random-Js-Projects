var marks = 0;
var questionno = -0;
var q = false;
var currentq = {q:"My favourite fruit0?", a1:"Apple", a2:"Mango", a3:"Banana", a4:"Guava", ans:""};
var question0 = {q:"My favourite fruit1?", a1:"Apple", a2:"Mango", a3:"Banana", a4:"Guava", ans:""};
var question1 = {q:"My favourite fruit2?", a1:"Apple", a2:"Mango", a3:"Banana", a4:"Guava", ans:""};
var question2 = {q:"My favourite fruit3?", a1:"Apple", a2:"Mango", a3:"Banana", a4:"Guava", ans:""};
var question3 = {q:"My favourite fruit4?", a1:"Apple", a2:"Mango", a3:"Banana", a4:"Guava", ans:""};
nextq()
function prevq(){
    questionno = questionno-2
    if (questionno == 3){
        questionno = 2
    }
    if (questionno < 0){
        questionno = 3
    }
    
    y=true
    nextq(y)
}
function nextq(y){
    q = false
    questionno = questionno+1
    if(questionno == 1){
        var currentq = question0;
    }else if(questionno == 2){
        var currentq = question1;
    }else if(questionno == 3){
        var currentq = question2;
    }else if(questionno >= 4){
        var currentq = question3;
        if (y==true){
            questionno = 4
            y=false
        }else{
            questionno = 0}
    }

    document.getElementById("q1").innerHTML = currentq.q;
    document.getElementById("o1").innerHTML = currentq.a1;
    document.getElementById("o2").innerHTML = currentq.a2;
    document.getElementById("o3").innerHTML = currentq.a3;
    document.getElementById("o4").innerHTML = currentq.a4;
    check(currentq.ans)

}

function updatemarks(){
document.getElementById("marks").innerHTML = "Marks: "+marks
}
updatemarks()
function myFunction(id) {
    if (document.getElementById(id).checked) {
        var x = document.getElementById(id).value;
        if (x == "Correct!"){
            document.getElementById("verdict").innerHTML = x;
            currentq.ans = id
            marks = marks + 5
            updatemarks()
            console.log(x)
        } else {
            document.getElementById("verdict").innerHTML = "Wrong!";
            console.log(x)
            }
        }
    
    console.log(currentq.ans)
}
function quickcheck(){
    myFunction("a1")
    myFunction("a2")
    myFunction("a3")
    myFunction("a4")
    check('')
    q = true
}
function check(id) {
        console.log(q)
        document.getElementById("a1").checked = false;
        document.getElementById("a2").checked = false;
        document.getElementById("a3").checked = false;
        document.getElementById("a4").checked = false;
        if (id !== "" && q==false){
        document.getElementById(id).checked = true;
        }}
    
    

    