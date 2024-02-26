 canvas = document.getElementById("myCanvas")
 ctx = canvas.getContext("2d")
nasa_mars_images_array=["mars.jpg","image_2.jpg","image_3.jpg","image_4.jpg"]
random_number = Math.floor(Math.random()*4);
background_image= nasa_mars_images_array[random_number];
console.log("background_image =" + background_image)
 rover_image ="rover.png"
roverX =10
roverY=10
roverWidth = 100
roverheight= 90
function add(){
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image


}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0 ,canvas.width, canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,roverX,roverY,roverWidth,roverheight)
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
{
    up();
    console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
    
}
function up()
{
    if(roverY>=0)
    {
        roverY = roverY - 10;
        console.log("when up arrow is pressed", x= +roverX+" y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(roverY<=500)
    {
        roverY = roverY + 10;
        console.log("when down arrow is pressed", x= +roverX+" y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(roverX>=0)
    {
        roverX = roverX - 10;
        console.log("when left arrow is pressed", x= +roverX+" y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(roverX<=700)
    {
        roverX = roverX +10;
        console.log("when right arrow is pressed", x= +roverX+" y ="+roverY);
        uploadBackground();
        uploadrover();
    }
}