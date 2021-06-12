function preload(){

}

function setup(){
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
video.hide();
canvas.position(600,350);
}

function draw(){
image(video,0,0,300,300);
}