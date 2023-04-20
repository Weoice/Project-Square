function preload() {



}

function setup() {

createCanvas(680, 600);


video = createCapture(VIDEO)
video.hide();


}

function draw() {

image(video, 200, 200, 410, 300);
fill(140, 0, 0)
rect(140, 140, 55, 55, 20);

fill(0, 100, 0)
rect(200, 140, 410, 55);

fill(140, 0, 0)
rect(620, 140, 55, 55, 20);

fill(0, 100, 0)
rect(620, 200, 55, 300);

fill(140, 0, 0)
rect(620, 510, 55, 55, 20);

fill(0, 100, 0)
rect(200, 510, 410, 55);

fill(140, 0, 0)
rect(140, 510, 55, 55, 20);

fill(0, 100, 0)
rect(140, 200, 55, 300);
}

function take_snapshot() {

save("You.png");

}








