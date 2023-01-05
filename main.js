var mouseEvent = "empty";
var Last_PositionX, Last_PositionY;
Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext("2d");
color = "black";
width_of_line = 1;
Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{ 
    color = document.getElementById("color").value; 
    width_of_line = document.getElementById("widthOfLine").value; 
    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    Current_PositionX = e.clientX - Canvas.offsetLeft;
    Current_PositionY = e.clientY - Canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.line_width = width_of_line;
        console.log("last position of X and Y coordinates = ");
        console.log("X = " + Last_PositionX + "Y = " + Last_PositionY);
        console.log(width_of_line);
        ctx.moveTo(Last_PositionX, Last_PositionY)
        console.log("Current position of X and Y coordinates = ");
        console.log("X = " + Current_PositionX + "Y = " + Current_PositionY);
        ctx.lineTo(Current_PositionX, Current_PositionY);
        ctx.stroke()
    }
    Last_PositionX = Current_PositionX;
    Last_PositionY = Current_PositionY;
}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
function ClrArea()
{
    ctx.clearRect(0,0,ctx.Canvas.width,ctx.Canvas.height);
}