function setup()
{
    Canvas = createCanvas(600,500);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide()

}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function preload()
{
    song = loadSound("topgun.mp3");
    song = loadSound("WSV.mp3");
}

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}