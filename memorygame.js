function startGame(){
  randomizeImages(getRandomNum(10,1));
  placeImg();
}

function makeMove(id){
  document.getElementById(id +"img").src="";
}
var randomLoc=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function getRandomNum(max, min){
  return Math.floor((Math.random()*max)*min);
}

var pics=["images/Boats.jpg",
          "images/Castle.jpg",
          "images/City.jpg",
          "images/Cliff.jpg",
          "images/Coral.jpg",
          "images/daniel.jpg",
          "images/Earth.jpg",
          "images/Harbor.jpg",
          "images/Harrison.jpg",
          "images/Heart.jpg",
          "images/Hotel.jpg",
          "images/Jessy.jpg",
          "images/Mountain.jpg",
          "images/Plants.jpg",
          "images/S.jpg",
          "images/Star.jpg",
          "images/Turtle.jpg",
          "images/Wave.jpg"
         ];

var randomLoc=["","","","","","","","","","","","","","","","","",""]

function randomizeImages(mixCount){
  for(var i=0; i<mixCount; i++){
  var num=getRandomNum(17,0);
  var temp=pics[0]
  pics[0]=pics[num];
  pics[num]=temp;
    for(var j=0; j<18; j++){
      randomLoc[j]=pics[j];
    }
  }
}
function placeImg(){
  //var location1="row"+getRandomNum(6,1)+"col"+getRandomNum()+"img";
  //var location2="row"+getRandomNum(6,1)+"col"+getRandomNum()+"img";
  //alert(location1);
  
  var h=0;
  for(var i=0; i<6; i++){
    for(var j=0; j<6; j++){
      
      document.getElementById("row"+ (j +1)+"col"+(i+1)+"img").src=randomLoc[h];
      h++;
  
  //document.getElementById(location1).src="images/Coral.jpg";
      }
    if(h==18){
       h=0;
      randomizeImages(getRandomNum(5,1));
       }
    }
  
}