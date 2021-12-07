function checkUserName(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    var usernameRegex =/(^[a-zA-Z0-9]{6,32})$/;
    if(isNotEmpty(idInput,idMessage)){
        if(usernameRegex.test(input.value)){
            message.innerHTML = "(*)"
            return true
        }else{
            message.innerHTML = "Tài khoản không đúng định dạng"
            return false
        }
    }else{
        return false
    }

}
function checkPassword(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    var passwordRegex = /^([a-zA-Z0-9-@!#$%^&*-]{6,32})*$/;
    if(isNotEmpty(idInput,idMessage)){
        if(passwordRegex.test(input.value)){
            message.innerHTML = "(*)"
            return true
        }else{
            message.innerHTML = "Mật khẩu không đúng định dạng"
            return false
        }
    }else{
        return false
    }
}
function checkMatchPassword(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    var password = document.getElementById("txtPassword").value;
    if(isNotEmpty(idInput,idMessage)){
        if(input.value == password){
            message.innerHTML = "(*)"
            return true
        }else{
            message.innerHTML = "Mật khẩu không khớp"
            return false
        }
    }else{
        return false
    }
}

$("#txtUserName").on("blur",function(){
    checkUserName("txtUserName","usernameHelp")
})
$("#txtPassword").on("blur",function(){
    checkPassword("txtPassword","passwordHelp")
})
$("#confirmPassword").on("blur",function(){
    checkMatchPassword("confirmPassword","confirmPasswordHelp")
})
$("#txtNumberPhone").on("blur",function(){
    checkNumberPhone("txtNumberPhone","numberPhoneHelp")
})
$("#selectPermission").on("input",function(){
    if($("#selectPermission").val() == "DOCTOR") {
        $("#boxSelectDepartment").addClass("open")
    }else{
        $("#boxSelectDepartment").removeClass("open")
    }
})
$("#addAccount").click(function(e){
    e.preventDefault()
    if(isNotEmpty("selectPermission","selectPermissionHelp") && isNotEmpty("txtFullName","fullNameHelp")
    && checkUserName("txtUserName","usernameHelp") && checkPassword("txtPassword","passwordHelp")
    && checkMatchPassword("confirmPassword","confirmPasswordHelp") &&  checkNumberPhone("txtNumberPhone","numberPhoneHelp")
    ){
        if($("#selectPermission").val() == "DOCTOR"){
            if(isNotEmpty("selectDepartment","selectDepartmentHelp")){
                $("#formSubmit").submit()
            }else{
                isNotEmpty("selectDepartment","selectDepartmentHelp")
            }
        }else{
            $("#formSubmit").submit()
        } 
    }else{
        isNotEmpty("selectPermission","selectPermissionHelp")
        isNotEmpty("txtFullName","fullNameHelp")
        checkUserName("txtUserName","usernameHelp")
        checkPassword("txtPassword","passwordHelp")
        checkMatchPassword("confirmPassword","confirmPasswordHelp")
        checkNumberPhone("txtNumberPhone","numberPhoneHelp") 
    }
})