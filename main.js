
difference = 0;
leftwristX= 0;
rightwristX = 0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 ,500);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);


}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}


function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
       
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference);
    }
}


function draw()
{
    background("pink");
    document.getElementById("font-size").innerHTML = "Font size of the text is = " + difference + "px";
     fill("black");
     textSize(difference);
    text("Aalia" , 50 , 400);
}
