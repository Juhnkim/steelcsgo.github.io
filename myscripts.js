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
var pics=["https://s-media-cache-ak0.pinimg.com/originals/47/ef/eb/47efeb2d7cfe615822a41b8f5de0935f.jpg",
         "http://animalsbreeds.com/wp-content/uploads/2015/11/Korean-Jindo-2.jpg",
         "https://s-media-cache-ak0.pinimg.com/564x/2c/50/16/2c50168e43f9215ebc08ac6838d10c79.jpg",
         "http://puppytoob.toobnetwork.com/wp-content/uploads/sites/3/2011/09/puppy-pictures15.jpg"];
var picIndex=0
function goLeft(){
  if(picIndex>0){
    picIndex=picIndex-1;
    document.getElementById("pic").src=pics[picIndex];
    
    console.log(picIndex);
  }
}

function goRight(){
  if(picIndex<(pics.length-1)){
    picIndex=picIndex+1;
    document.getElementById("pic").src=pics[picIndex];
    
    console.log(picIndex);
  }
}