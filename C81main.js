var mouseEvent = 'empty'
var lpx, lpy;

Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext('2d');
color = 'red';
width = 4;

Canvas.addEventListener('mousedown', my_mousedown);
function my_mousedown(e) {

mouseEvent = 'mouseDown';

}

Canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e) {

mouseEvent = 'mouseup';
}

Canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e) {

    mouseEvent = 'mouseleave';
}

Canvas.addEventListener('mousemove', my_mousemove);
function my_mousemove(e) {

    current_position_x = e.clientX-Canvas.offsetLeft;
    current_position_y = e.clientY-Canvas.offsetTop;

    if(mouseEvent=='mouseDown') {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lpx, lpy)
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
lpx = current_position_x;
lpy = current_position_y;

}