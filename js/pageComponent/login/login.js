$("#btn-login").click(function(e){
    if($("#username").val() == "" || $("#password") == ""){
        e.preventDefault();
        console.log("hi")
        $(".box-message").html(`
            <div class="alert alert-danger form-message">
                Vui lòng nhập tài khoản và mật khẩu
            </div> `)
    }
    else{
      /*   $("#btn-login").submit() */
    }
})