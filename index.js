var score=0;
var q1=document.getElementById("cat");
var q2=document.getElementById("q2");

function qu1(){
    if(q1.checked){
        
        score ++;
        document.getElementById("scoreline").innerHTML="Correct!! Your score is " + score;
   

        var temp=document.getElementById("qq2").content;
        var copy=document.importNode(temp,true);
        document.getElementById("questions").appendChild(copy);
        document.getElementById("q1").style.display="none";
        document.getElementById("progress").style.width=33 + "%";
       // document.getElementById("questions").innerHTML=q2;
    }else{
        document.getElementById("scoreline").innerHTML="Incorrect!! Your score is " + score;
       // console.log("Incorrect!! Your score is " +score);
    }
}document.getElementById("next").addEventListener("click",qu1);


function qu2() {

    var q2ans = document.getElementById("four");
    if (q2ans.checked) {

        score++;
        document.getElementById("scoreline").innerHTML="Correct!! Your score is " + score;
        //console.log("Correct!! Your score is " + score);

         var temp1=document.getElementById("q3").content;
        var copy1=document.importNode(temp1,true);
        document.getElementById("questions").appendChild(copy1);
        document.getElementById("q2").style.display="none"; 
        document.getElementById("progress").style.width=66 + "%";
        // document.getElementById("questions").innerHTML=q2;
    } else {
        document.getElementById("scoreline").innerHTML="Incorrect!! Your score is " + score;
        //console.log("Incorrect!! Your score is " + score);
    }
} 
function q3(){
    var bayern=document.getElementById("bayern");
    if(bayern.checked){
        score ++;
        document.getElementById("scoreline").innerHTML="Correct!! Your score is " + score;
        //console.log("Correct!! Your score is " + score);
        
        var end=document.getElementById("congrats").content;
        var copy2=document.importNode(end,true);
        document.getElementById("questions").appendChild(copy2);
        document.getElementById("qq3").style.display="none";
        document.getElementById("progress").style.width=100 + "%";
        end.classList.add(".congrats");
    }else{
        document.getElementById("scoreline").innerHTML="Incorrect!! Your score is " + score;
        //console.log("Incorrect!! Your score is " + score);
    }
}