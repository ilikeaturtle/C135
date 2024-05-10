function setup(){
    canvas=createCanvas(550, 550);
    canvas.position(600,90);
    video= createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
}

function modelLoaded(){
    console.log('Pose net is innitialized!');
}

function gotPoses(results){
if(results.length >0){
    console.log(results);
}
}