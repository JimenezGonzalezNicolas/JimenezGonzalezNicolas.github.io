$(document).ready(function(){
    var imgItems = $('.slider li').length; 
    var pagPos = 1;
    
    for(var i = 0; i < imgItems; i++){ 
        
        $('.paginacion').append('<li                            class="fa fa-eye</li>');
    }
    
 $('.slider li').hide(); 
    $('.slider li:first').show(); 
       
 //ACTIVAR O LLAMAR FUNCIONES.//
    $('.paginacion li').click(paginacion);
    $('.der span').click(siguiente);
    
    
    //FUNCIONES
    function paginacion(){
        pagPos = $(this).index()+1;
        
        $('.slider li').hide();
        $('.slider li:nth-child('+pagPos+')').show();
        
        $('.paginacion li').css ({color:'silver'})
        $(this).css({color:'red'});
        
        
    }
    function siguiente(){
        if (pagPos >= imgItems){
            pagPos = 1;
        }else{
            pagPos++;
        }
    $('.slider li').hide();
        $('.slider li:nth-child('+pagPos+')').fadeIn();
        
        $('.paginacion li').css ({color:'silver'})
        $('.paginacion li:nth-child('+pagPos+')').css({color:'red'});
    
    }



function anterior(){
        if (pagPos <= imgItems){
            pagPos = 1;
        }else{
            pagPos--;
        }
    $('.slider li').hide();
        $('.slider li:nth-child('+pagPos+')').fadeIn();
        
        $('.paginacion li').css ({color:'silver'})
        $('.paginacion li:nth-child('+pagPos+')').css({color:'red'});
    
    }

});
    
    
