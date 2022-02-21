canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

//MY WAY----------------------------------------------------------------------------------------------------------------

var top_x = 0
var top_y = 260

var bottom_x = 100
var bottom_y = 360

var top_color = ["blue", "black", "red"];
var bottom_color = ["orange", "green"];

for(var i = 0; i<3; i++){
    top_x = top_x + 200;
    ctx.beginPath();
    ctx.strokeStyle = top_color[i];
    ctx.lineWidth = 10;
    ctx.arc(top_x, top_y, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

for(var i = 0; i<2; i++){
    bottom_x = bottom_x + 200;
    ctx.beginPath();
    ctx.strokeStyle = bottom_color[i];
    ctx.lineWidth = 10;
    ctx.arc(bottom_x, bottom_y, 80, 0, 2 * Math.PI);
    ctx.stroke();
}

//MY DAD'S WAY-----------------------------------------------------------------------------------------------------------

/*x = 200
y = 260
var colors = ["blue","orange","black", "green", "red"];

for (var i = 0; i < 5; i++) {
    if (i > 0) {
        //check odd or even number. If odd number, increase y by 100. If even number, decrease y by 100.
        if (i % 2 != 0) {
            y = y + 100
        } else {
            y = y - 100
        }
        x = x + 100
    }

    ctx.beginPath();
    ctx.strokeStyle = colors[i];
    ctx.lineWidth = 10;
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    ctx.stroke();
}*/

//I TRIED MY DAD'S WAY--IT WORKED!!-------------------------------------------------------------------------------------

/*x = 200
y = 260
var colors = ["blue","orange","black", "green", "red"];

for (var i = 0; i < 5; i++){
    if (i > 0){
        if (i % 2 != 0){
            y = y + 100
        }else{
            y = y - 100
        }
        x = x + 100
    }

    ctx.beginPath();
    ctx.strokeStyle = colors[i];
    ctx.lineWidth = 10;
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    ctx.stroke();
}*/