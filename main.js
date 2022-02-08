img = "";
    status = "";
    objects = [];

function preload() {
img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
     document.getElementById("status").innerHTML =  "Status : Object Detected";

     fill("#ff001e")
     percent =floor(objects[i].confidence * 100);
     text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
     noFill();
     stroke("#ff001e");
     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}