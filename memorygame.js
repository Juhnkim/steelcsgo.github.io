var randomLoc=["", "", "", "", "", "", "", "" , "", 
				"", "", "", "", "", "", "", "" , ""];
var randomLoc2=["", "", "", "", "", "", "", "" , "", 
				"", "", "", "", "", "", "", "" , ""];
var firstPicChosen = false;
var secondPicChosen = false;
var firstId = "";
var secondId = "";
var firstPic = "";
var secondPic = "";
var thirdPic = "";
			
function startGame(){
  randomizeImages(getRandomNum(10, 1));
  randomizeImages2(getRandomNum(5, 1));
  //test to see images placed
  //placeImg();
}

function makeMove(id, row, col){
	

	if(firstPicChosen === false){
		firstPicChosen = true;
		//alert(firstPicChosen);
		firstId = id;	
		document.getElementById(id +"img").src=getPic(row, col);
		firstPic = document.getElementById(id +"img").src;
	}
	else if(secondPicChosen === false){
		secondPicChosen = true;
		secondId = id;
		document.getElementById(id + "img").src=getPic(row, col);
		secondPic = document.getElementById(id + "img").src;
	}
	else{
		//secondPic = getPic(row, col);
		//document.getElementById(id +"img").src=secondPic;
		if(firstPic !== secondPic){
			turnCards(firstId, secondId);
			firstPicChosen = false;
			secondPicChosen = false;
		}
		else{
      firstPicChosen = false;
			secondPicChosen = false;
			//alert(firstId);
			
			//document.getElementById(firstId + "img").src="images\BackCard.jpg";
			//document.getElementById(id + "img").src="images\BackCard.jpg";
			//setTimeout(turnCards(firstId, id), 12000);
		}
	}
}

function turnCards(firstId, id){
	//alert ("no match");
	document.getElementById(firstId + "img").src="images/BackCard.jpg";
	document.getElementById(id + "img").src="images/BackCard.jpg";
}

function getPic(num1, num2){
	
	if(num1 <= 3){
		return randomLoc[(num1*num2) - 1];
	}
	else{
		return randomLoc2[(num1*num2) - 1];
	}
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



function randomizeImages(mixCount){
	var num = 0;
	var num2 = 0;
  for(var i=0; i<mixCount; i++){
	  num=getRandomNum(17, 1) -1;
	  num2=getRandomNum(17, 1) -1;
	  var temp=pics[num2]
	  //alert(temp);
	  pics[num2]=pics[num];
	  pics[num]=temp;
  }
  
  for(var j = 0; j < 18; j++){
	  
	  randomLoc[j] = pics[j];
  }
}

function randomizeImages2(mixCount){
	var num = 0;
	var num2 = 0;
  for(var i=0; i<mixCount; i++){
	  num=getRandomNum(17, 1) -1;
	  num2=getRandomNum(17, 1) -1;
	  var temp=pics[num2]
	  //alert(temp);
	  pics[num2]=pics[num];
	  pics[num]=temp;
  }
  
  for(var j = 0; j < 18; j++){
	  
	  randomLoc2[j] = pics[j];
  }
}

function placeImg(){
	var h = 0;

  for(var i=0; i<6; i++){
	  for(var j=0; j<6; j++){
  
		document.getElementById("row"+ (j +1)+"col"+(i+1)+"img").src=randomLoc[h];
		h++;
		
		if(h == 17){
			h = 0;  
			randomizeImages(getRandomNum(5, 1));
		}
	  }
	  

  }

}