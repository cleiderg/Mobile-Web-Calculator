/**
 * Created by cleider on 6/29/17.
 */


$(document).ready(function(){


    $(document).on('touchstart','.col-sm-3, .col-sm-6', function(){
        $(this).fadeTo(0, 0.80);
        console.log('mouse up')

    })
        .on('touchend','.col-sm-3, .col-sm-6',function(){
            $(this).fadeTo(0, 1.20);
            console.log('mouse down')

        });








});