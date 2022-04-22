function preload() {

}
function setup() {
video=createCapture(VIDEO);
video.hide()
canvas=createCanvas(550,550);
canvas.position(560,150);

posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotposes)
}
function modelloaded() {
  console.log("modelloaded")
}
function gotposes(result) {
 if(result.length>0){
   console.log(result)
}
}
 

function draw() {
background("grey")
}