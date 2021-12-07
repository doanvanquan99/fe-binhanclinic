$("#txtFullName").on("blur",function(){
    isNotEmpty("txtFullName","messageFullName")
})
$("#txtNumberPhone").on("blur",function(){
    checkNumberPhone("txtNumberPhone","messageNumberPhone")
})
$("#txtDateOfBirth").on("blur",function(){

    isNotEmpty("txtDateOfBirth","messageDateOfBirth")
})
$("#selectGender").on("blur",function(){
    isNotEmpty("selectGender","messageGender")
})
$("#txtAddress").on("blur",function(){
    isNotEmpty("txtAddress","messageAddress")
})
$("#txtCMND").on("blur",function(){
    checkCMND("txtCMND","messageCMND")
})

function checkCMND(idInput,idMessage){
    var input = document.getElementById(idInput)
    var message = document.getElementById(idMessage)
    var cmndRegex = /^([0-9]{12}|[0-9]{9})*$/;
    if(isNotEmpty(idInput,idMessage)){
        if(cmndRegex.test(input.value)){
            message.innerHTML = "(*)"
            return true
        }else{
            message.innerHTML = "CMND không đúng định dạng"
            return false
        }
    }else{
        return false
    }
}
$("#addMedicalRecord").click(function(e){
    e.preventDefault()
    if(isNotEmpty("txtFullName","messageFullName") &&  checkNumberPhone("txtNumberPhone","messageNumberPhone")
    &&  isNotEmpty("txtDateOfBirth","messageDateOfBirth") && isNotEmpty("selectGender","messageGender") 
    && isNotEmpty("txtAddress","messageAddress") && checkCMND("txtCMND","messageCMND")
    ){
        var date = $("#txtDateOfBirth").val()
        var dateArray = date.split("-")
        var newDate = dateArray[2] + "/"+ dateArray[1] + "/"+ dateArray[0]
        $("#txtDateOfBirthValue").val(newDate)
        $("#addMedicalRecord").submit()
    }else{
        isNotEmpty("txtFullName","messageFullName")
        checkNumberPhone("txtNumberPhone","messageNumberPhone")
        isNotEmpty("txtDateOfBirth","messageDateOfBirth")
        isNotEmpty("selectGender","messageGender")
        isNotEmpty("txtAddress","messageAddress")
        checkCMND("txtCMND","messageCMND")
    }
})