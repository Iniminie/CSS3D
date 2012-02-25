/* Author: Frank van Dongen

*/

$(document).ready(function()
{
    var rotation = 0;
    $(document).click(function()
    {
        rotation -= 90;
        $('#container').css('-webkit-transform', 'rotateY('+rotation+'deg)'); 
    });
});





