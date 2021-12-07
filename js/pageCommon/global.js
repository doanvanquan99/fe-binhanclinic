$("#nav-user").click(function(){
    if($("#nav-dropdown").hasClass("open")){
    $("#nav-dropdown").removeClass("open")
    }else{
        $("#nav-dropdown").addClass("open")
    }
})
$(window).click(function(e){
    $target = $(e.target);
    if(!$target.closest('#nav-user').length && 
    $('#nav-dropdown').hasClass("open")) {
        $("#nav-dropdown").removeClass("open")
    }        
});

function isNotEmpty(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    if(input.value.trim() == ""){
        message.innerHTML = "Vui lòng không để trống"
        return false
    }
    else{
        message.innerHTML = "(*)"
        return true
    }
}
function checkNumberPhone(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    var numberPhoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g; 
    if(isNotEmpty(idInput,idMessage)){
        if(numberPhoneRegex.test(input.value)){
            message.innerHTML = "(*)"
            return true
        }else{
            message.innerHTML = "Số điện thoại không đúng định dạng"
            return false
        }
    }else{
        return false
    }
}
