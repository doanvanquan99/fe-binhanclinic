$("#headerUser").click(function(){
    if($(".user_dropdown").hasClass("open")){
        $(".user_dropdown").removeClass("open")
    }else{
        $(".user_dropdown").addClass("open")
    }
})
$(".nav-list-item").click(function(e){
    for(var i = 0 ; i <$(".nav-list-item").length;i++){
        if($(".nav-list-item")[i] != $(this)[0]){
            $(".nav-list-item")[i].querySelector(".submenu").classList.remove("active")
        }
    }
    if(e.target == $(this)[0].querySelector(".nav-list-wrapper") || e.target == $(this)[0].querySelector(".nav-list-name>i")|| e.target == $(this)[0].querySelector(".nav-list-name span")|| e.target == $(this)[0].querySelector(".nav-list-wrapper>i")) {
        if($(this)[0].querySelector(".submenu").classList.contains("active")){
            $(this)[0].querySelector(".submenu").classList.remove("active")
        }else{
            $(this)[0].querySelector(".submenu").classList.add("active")
        }
    }
})


$(".actions-button").click(function(){

    if($(this).parents()[1].nextElementSibling.classList.contains("open")){
        $(this).parents()[1].nextElementSibling.classList.remove("open")
    }else{
        $(".detail-row").removeClass("open")
        $(this).parents()[1].nextElementSibling.classList.add("open")
    }
})