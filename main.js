function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
    }
    function modelLoaded(){
    console.log("model_loded");
    }
    function draw(){
        background("#5ebfff");
    }
    function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
    }