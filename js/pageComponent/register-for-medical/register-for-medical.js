function getApi(Api, callback) {
    fetch(Api)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
        .catch(function (error) {
            console.log(error)
        })
}

$("#datepicker").datepicker({
    beforeShowDay: function (date) {
        var day = date.getDay();
        if (day == 0) {
            return [false]
        } else {
            return [true]
        }
    },
    onSelect: function () {
        var dateObject = $(this).datepicker('getDate');
        $("#choose-department").addClass("open")
        var dateTime = new Date(dateObject)
        $("#registerMedicalDate").val(`${dateTime.getDate()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`)
    },
    inline: true,
    minDate: new Date(),
    maxDate: '+30D',
});
$("#department").on("input", function () {
    if ($("#department").val() != "") {
        $("#choose-doctor").addClass("open")
    }
})
$("#doctor").on("input", function () {
    if ($("#doctor").val() != "") {
        $("#choose-session").addClass("open")
    }
})
$("#session").on("input", function () {
    if ($("#session").val() != "") {
        $("#symptom").addClass("open")
        $(".form-btn").addClass("open")
    }
})
/* const linkDepartment = window.origin + "/binhan-clinic/api-department"; */
const linkDepartment = "http://localhost:8080/binhan-clinic/api-department";

getApi(linkDepartment, function (data) {
    const htmlOptionDepartment = data.map((item) => {
        return `
        <option value="${item.id}">${item.name}</option>
        `
    })
    $("#department").html("<option value=''>Chọn khoa</option>" + htmlOptionDepartment.join(""))
    $("#department").on("change", function () {
        const departmentId = $(this).val()
        if (departmentId != "") {
            const linkDoctor = `http://localhost:8080/binhan-clinic/api-doctor?departmentId=${departmentId}`;
            getApi(linkDoctor, function (data) {
                const htmlOptionDoctor = data.map((item) => {
                    return `
                        <option value="${item.id}">${item.fullName}</option>
                    `
                })
                $("#doctor").html("<option value=''>Chọn Bác sĩ</option>" + htmlOptionDoctor.join(""))
            })
        }else{
            $("#doctor").html("<option value=''>Vui lòng Chọn Khoa</option>")
        }
    })
})
$("#btnConfirmInfo").click(function(){
    $("#doctorName").val(`${$("#choose-doctor option:selected").text()}`)
    $("#departmentName").val(`${$("#choose-department option:selected").text()}`)
    console.log($("#doctorName").val(),$("#departmentName").val())
    if($("#registerMedicalDate").val() != "" && $("#session").val() != "" 
    && $("#department").val() != "" && $("#doctor").val() != ""){
        $("#message").text("")
        $("#modalConfirmBody").html(`
            <p class="confirm-info">Họ và tên: ${name}</p>
            <p class="confirm-info">CMND: ${cmnd}</p>
            <p class="confirm-info">Ngày khám : ${$("#registerMedicalDate").val()}</p>
            <p class="confirm-info">Khoa khám : ${$("#choose-department option:selected").text()}</p>
            <p class="confirm-info">Bác sĩ : ${$("#choose-doctor option:selected").text()}</p>
            <p class="confirm-info">Buổi khám : ${$("#choose-session option:selected").text()}</p>
            <p class="confirm-info">Triệu chứng : ${$("#symptom-input").val()}</p>
        `)
        $("#modalConfirm").modal();
    }else{
        $("#message").text("Vui lòng điền đầy đủ thông tin")
    }
})



$("#btnConfirm").click(function(){
    $("#modalConfirm").modal('hide');
    var data = {};
    var formData = $("#formRegister").serializeArray();
    $.each(formData, function(i, v) {
        data[v.name] = v.value;
    })
    fetch('http://localhost:8080/binhan-clinic/api-medical-register',{
        method:'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    }).then(function(response){
        return response.json()
    }).then(function(data){
        $(".text-notifi").html(`
        <h4 class="text-center text-success">
            <i class="fas fa-check-circle"></i>
            Gửi thông tin đăng ký khám bệnh thành công
        </h4>  
        `)
        $("#modalNotifi").modal()
    }).catch(function(error){
        $(".text-notifi").html(`
        <h4 class="text-center text-danger">
            <i class="fas fa-exclamation-circle"></i> 
           Đăng ký không thành công
           <br> Vui lòng thử lại!
        </h4>  
        `)
        $("#modalNotifi").modal()
    })
})
