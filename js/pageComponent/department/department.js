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
            console.log(departmentId)
            const linkDoctor = `http://localhost:8080/binhan-clinic/api-doctor?departmentId=${departmentId}`;
            getApi(linkDoctor, function (data) {
                const htmlListDoctor = data.map((item,index) => {
                    return `
                        <tr>
                            <td>${index+1}</td>
                            <td>${item.fullName}</td>
                        </tr>
                    `
                })
                $("#tb-department-body").html(htmlListDoctor.join(""))
            })
        }else{
            $("#tb-department-body").html("")
        }
    })
})