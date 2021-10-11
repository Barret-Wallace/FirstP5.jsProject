function preload(){

}
function setup(){
    canvas = createCanvas(500,400)
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw(){
    fill('red');
    circle(20, 20, 40);
    fill('green');
    rect(33, 15, 435, 20)
    fill('red')
    circle(20, 300, 40);
    fill('green');
    rect(33, 300, 435, 20)
    fill('red');
    circle(460, 300, 40);
    fill('green');
    rect(5, 40, 30, 245)
    fill('red');
    circle(460, 20, 40);
    fill('green');
    rect(450, 40, 30, 245)
    image(cam,50,60,375,200);
}
function Capture(){
 save("party.png");
}