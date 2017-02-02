var operand1;
var operand2;

function getNumbers(){
  //alert("check");
  operand1 = Math.floor(Math.random()*50)+1;  
  operand2 = Math.floor(Math.random()*50)+1;  
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("userAnswer"),innerHTML="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  if(userSum == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
    else{
    document.getElementById("results").innerHTML="Wrong!";
  }
}
var pics=["http://animalsbreeds.com/wp-content/uploads/2015/11/Korean-Jindo-2.jpg",
          "https://s-media-cache-ak0.pinimg.com/originals/47/ef/eb/47efeb2d7cfe615822a41b8f5de0935f.jpg",
         "http://puppytoob.toobnetwork.com/wp-content/uploads/sites/3/2011/09/puppy-pictures15.jpg"];
var picIndex=0
function goLeft(){
  if(picIndex>0){
    document.getElementById("pic").src=pic[picIndex];
    picIndex=picIndex-1;
    console.log(picIndex);
  }
}

function goRight(){
  if(picIndex<(pics.length-1)){
    document.getElementById("pic").src=pic[picIndex];
    picIndex=picIndex+1;
    console.log(picIndex);
  }
}