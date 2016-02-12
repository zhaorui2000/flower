(()=>{
    // 判断所填信息不能为空
    $("#order_details div a").click(function (e) {
        e.preventDefault();
        var user_name=$(".user_name").val(),
            province = $(".province").val(),
            address =$(".address").val(),
            email =$(".email").val(),
            phone =$(".phone").val(),
            city = $(".city").val();
        if(user_name=="" || province=="" || address=="" || email=="" || phone=="" ||city==""){
            $(".warn").show();
        }else{
            console.log(1);
        }
    })

    // 支付方式的选择
    $("#order_details div").on("click","input",function () {
        $(this).parent().next().addClass("active").siblings().removeClass("active");
    })
})()
