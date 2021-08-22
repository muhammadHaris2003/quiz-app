function check(){
  let c = 0;
  let q1 = document.getElementById("a1");
  let q2 = document.getElementById("a2");
  let q3 = document.getElementById("a3");
  let q4 = document.getElementById("a4");
  let q5 = document.getElementById("a5");
  let result = document.getElementById('result');
  let quiz = document.getElementById("quiz");

  
  if( q1.checked == true){c++}
  if( q2.checked == true){c++}
  if( q3.checked == true){c++}
  if( q4.checked == true){c++}
  if( q5.checked == true){c++}
  
  // quiz.style.display ="none";

  if(c<=3){
    result.textContent = "your result is" + " "+  c +" " + "it is not be good please try to work on yourself"  
  } else{
    result.textContent = "your result is" + " " + c + " " + "it is awesome keep it up."  
  }
  document.getElementById("q5").className ="no-show"
  document.getElementById("q6").className ="show"

}

function next1(){
  document.getElementById("q1").className = "no-show"
  document.getElementById("q2").className = "show"
}

function next2(){
  document.getElementById("q2").className ="no-show"
  document.getElementById("q3").className ="show"
}

function next3(){
  document.getElementById("q3").className ="no-show"
  document.getElementById("q4").className ="show"
}

function next4(){
  document.getElementById("q4").className ="no-show"
  document.getElementById("q5").className ="show"
}

  
