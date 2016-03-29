

$(document).ready(function(){
    $(".form-control").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="category"){
                $(".x_panel2").not(".category").hide();
                $(".category").show();
            }
            else if($(this).attr("value")=="product"){
                $(".x_panel2").not(".product").hide();
                $(".product").show();
            }
            else if($(this).attr("value")=="brand"){
                $(".x_panel2").not(".brand").hide();
                $(".brand").show();
            }
            else{
                $(".x_panel2").hide();
            }
        });
    }).change();
});
