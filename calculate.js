/**
 * Created by cleider on 6/29/17.
 */


$(document).ready(function(){

    //alert("This is meant for mobile devices only. Thank you.");
    $(document).delegate(".ui-content", "touchmove", false);

    var index = 0;
    $(document)
        .on('touchstart','.col-sm-3, .col-sm-6', function(){
        $(this).fadeTo(0, 0.80);

    })
        .on('touchend','.col-sm-3, .col-sm-6',function(){
            index = index +1;
            console.log(index);
            var this_elem = this;
            $(this_elem).fadeTo(0, 1.20);
            changeDisplay(this_elem, index)


        });

    function changeDisplay(this_elem, index){
        if (index === 1){
            $('#display').text($(this_elem).text());

        }
        else{
            $('#display').append($(this_elem).text());
        }


    }


});