
(()=>{
//    左侧导航栏的点击切换
    $(".usermenu").on("click","li a",function(e){
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        var href=$(this).attr("href");
        $(href).show().siblings().hide();
    })


    // 用户信息的获取
    $.ajax({
        type:"get",
        url:"data/users/getUserMessage.php",
        success:function (data) {
            if(data.avatar!=null){
                $(".user_image").attr("src","data.avator");
            }
            $(".phone").html(data.phone);
            $(".ophone input").val(data.phone);
        },
        error:function () {
            alert("网络故障")
        }
    })
    //用户信息更改
    $(".save").click(function(){
        var uname=$(".uname").val(),
            user_name=$(".user_name").val(),
            sign=$(".sign").val(),
            phone=$("phone").val();

        $.ajax({
            type:"post",
            url:"data/users/updateUserMessage.php",
            data:{ uname , user_name ,sign ,phone},
            success:function (data) {
                console.log(data);
                // history.go(0);
            }
            ,
            error:function () {
                alert("网络故障")
            }
        })
    })

    // 订单获取
    var html=""
    $.ajax({
        type:"get",
        url:"data/order/getOrder.php",
        success:function (data) {
            for(p of data){
                console.log(p);
                html+=`
                    <li>
                          <div>
                            <img src="${p.sm}" >
                          </div>
                           <div>
                               <p class="otitle">收货地址：${p.order_adress}</p>
                               <p>订单状态：${p.status==10?"等待":"其他"}</p>
                               <p class="odetail">
                                   <span>￥${p.price}</span>
                                   <span>x</span>
                                   <span>${p.count}</span>
                                   <span>总价：￥ ${p.count *p.price}</span>
                               </p>
                           </div>
                    </li>
                `
            }
            $(".order_list ul").html(html);
        },
        error:function () {
            alert("网络故障")
        }
    })

})()
