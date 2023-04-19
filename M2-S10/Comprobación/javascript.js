// cargar documento
$(document).ready(function(){
//JQuery
    $("#text1").hover(function(){
        $("#text2").toggle()
    })

    $("#img").click(function(){
        $("#img").css({width:'100%'})
    })

    $("#img").mouseout(function(){
        $("#img").css({width:'20%'})
    })
    $("#caja3").mouseover(function(){
        $("#caja3").css("font-size",'32px')
    })
    $("#caja3").mouseout(function(){
        $("#caja3").css("font-size",'16px')
    })
});