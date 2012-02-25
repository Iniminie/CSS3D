/* Author: Frank van Dongen

*/

var mDown = false;
var prevX = -1;
var rotation = 0;
    
$(document).ready(function()
{
    //$(document).click(function()
    //{
    //    rotation -= 90;
    //    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)'); 
    //});
    
    $(document).mousemove(function(e)
    {
        if(mDown)
        {
            if(prevX == -1)
                prevX = e.pageX;
            var diff = e.pageX - prevX;
            rotation += diff/10;
            
            if(rotation > 360)
                rotation -= 360;
            if(rotation < -360)
                rotation += 360;
            
            $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)'); 
            
            //console.log('prevX: '+prevX+'\n X: '+e.pageX+'\n diff: '+diff+'\n rotation: '+rotation+'\n');
            
            prevX = e.pageX;
        }
    });
    
    $(document).mousedown(function()
    {
        mDown = true;
    });
    $(document).mouseup(function()
    {
        mDown = false; 
        prevX = -1;
        //snap();
    });
});

function snap()
{
    var tempRotation = rotation;
    if(tempRotation < 0)
        tempRotation = 360 + tempRotation;
        
    var pageId = Math.round(tempRotation/90);
    if(pageId == 4)
        pageId = 0;
    
    console.log(pageId);
    
    snapTo(pageId);
}

function snapTo(id)
{
    var tempRotation = rotation;
    if(tempRotation < 0)
        tempRotation = 360 + tempRotation;
        
    switch(id)
    {
        case 0:
            if(Math.floor(tempRotation) !== 0)
            {
                if(rotation < 0)
                {
                    rotation++;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                if(rotation > 0)
                {
                    rotation--;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                console.log(rotation);
                setTimeout(function(){snapTo(0);}, 16);
            }
            break;
        case 1:
            if(Math.floor(tempRotation) !== 90)
            {
                if(rotation < 90)
                {
                    rotation++;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                if(rotation > 90)
                {
                    rotation--;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                console.log(rotation);
                setTimeout(function(){snapTo(1);}, 16);
            }
            break;
        case 2:
            if(Math.floor(tempRotation) !== 180)
            {
                if(rotation < 180)
                {
                    rotation++;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                if(rotation > 180)
                {
                    rotation--;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                console.log(rotation);
                setTimeout(function(){snapTo(2);}, 16);
            }
            break;
        case 3:
            if(Math.floor(tempRotation) !== 270)
            {
                if(rotation < 270)
                {
                    rotation++;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                if(rotation > 270)
                {
                    rotation--;
                    $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)');
                }
                console.log(rotation);
                setTimeout(function(){snapTo(3);}, 16);
            }
            break;
    }
}





