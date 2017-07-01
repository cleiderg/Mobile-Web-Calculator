/**
 * Created by cleider on 6/29/17.
 */


$(document).ready(function(){

    //alert("This is meant for mobile devices only. Thank you.");
    $(document).delegate(".ui-content", "touchmove", false);


    var index = 0;
    $(document)
    // figure out a way to implement touch and mouse click at same time.
        .on('touchstart','.col-sm-3, .col-sm-6', function(){
        $(this).fadeTo(0, 0.80);

    })
        .on('touchend','.col-sm-3, .col-sm-6',function(){

            console.log($(this).text());
            index = index +1;
            console.log(index);
            var this_elem = this;
            $(this_elem).fadeTo(0, 1.20);

            changeDisplay(this_elem, index);
            clearDisplay(this_elem);

            var nums = getNumbers(this_elem);


            calculate(this_elem);


        });

    function getNumbers(this_elem){

        if ($(this_elem).attr('class') === 'col-sm-3 operator'){
            console.log('nums' + $(this_elem).text());
            return $(this_elem).text();


        }

    }

    function clearDisplay(this_elem){
        console.log($(this_elem).text());

        if ($(this_elem).text() === $('.clear').text() ){
            $('#display').text('');
        }

    }

    function changeDisplay(this_elem, index){


        if (index === 1){
            $('#display').text($(this_elem).text());

        }
        else{
            $('#display').append($(this_elem).text());
        }



    }


    function calculate(this_elem){
        if ($(this_elem).text() === $('.equals').text()) {

        }

    }




});