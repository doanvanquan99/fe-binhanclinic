$(".btn-view").click(function(){
    if($(this).parent().parent().hasClass("view")){
        $(this).parent().parent().removeClass("view")
    }else{
        $(this).parent().parent().addClass("view")
    }
})
$(function() {
    $('.qr-img').on('click', function() {
        $(".img-container").html(`<img src="${$(this).attr('src')}" class="imagepreview" style="width: 100%;" >`)
        $('#imagemodal').modal('show');   
    });     
});