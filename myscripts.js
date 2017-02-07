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
         "http://puppytoob.toobnetwork.com/wp-content/uploads/sites/3/2011/09/puppy-pictures15.jpg",
         "http://www.thegreatcourses.com/media/catalog/product/cache/1/image/800x600/0f396e8a55728e79b48334e699243c07/1/8/1884---base_image_4.1424267632.jpg",
         "http://wallpaper-gallery.net/images/hd-images/hd-images-7.jpg",
         "https://s-media-cache-ak0.pinimg.com/originals/1d/c6/af/1dc6afeac34de537cdfb323be99509d5.jpg",
         "https://s-media-cache-ak0.pinimg.com/736x/67/63/06/676306aad47f70e74621a822722864b2.jpg"];

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