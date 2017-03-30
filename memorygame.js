function startGame(){
  randomizeImages(1);
  placeImg();
}

function makeMove(id){
  document.getElementById(id +"img").src="";
}

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

var randomLoc=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function randomizeImages(mixCount){
  for(var i=0; i<mixCount; i++){
  var num=getRandomNum(pics.length-1,0);
  var temp=pics[0]
  pics[0]=pics[num];
  pics[num]=temp;
  }
}
function placeImg(){
  //var location1="row"+getRandomNum(6,1)+"col"+getRandomNum()+"img";
  //var location2="row"+getRandomNum(6,1)+"col"+getRandomNum()+"img";
  //alert(location1);
  for(var h=0; h<1; h++){
  for(var i=0; i<pics.length; i++){
    for(var j=0; j<pics.length; j++){
      
      document.getElementById("row"+ (i +1)+"col"+(j+1)+"img").src=pics[i]
  
  //document.getElementById(location1).src="images/Coral.jpg";
      }
    }
  }
}