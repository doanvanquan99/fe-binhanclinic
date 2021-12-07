
$(".btn-choose").click(function() {
    if ($(".patient-profile-box.active")[0] != $(this).parent()[0]) {
        $(".patient-profile-box.active").removeClass("active")
    }
    $(this).parent().toggleClass("active");
})