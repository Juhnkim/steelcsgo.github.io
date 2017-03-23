function startGame(){
  placeImg();
}

function makeMove(id){
  document.getElementById(id +"img").src="";
}

function getRandomNum(){
  return Math.floor((Math.random()*6)+1);
}
function placeImg(){
  var location1="row"+getRandomNum()+"col"+getRandomNum()+"img";
  var location2="row"+getRandomNum()+"col"+getRandomNum()+"img";
  alert(location1);
  
  document.getElementById(location1).src="images/Coral.jpg";
}