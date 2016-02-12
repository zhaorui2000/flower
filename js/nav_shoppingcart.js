function shopping(){
    var html=`<link rel="stylesheet" href="css/nav_shoppingcart.css">`
    $("head").append(html);
    $.ajax({
        type: "get",
        url: "nav_shoppingcart.html",
        success: function (data) {
            $("#nav_shopping").html(data);
        },
        error: function () {
           alert("网络故障请检查！")
        }
    })

    //获取用户的购物车列表
    $.ajax({
        type:"get",
        url:"data/users/islogin.php",
        success:function (data) {
            if(data.code>0){
                $.ajax({
                    type:"get",
                    url:"data/cart/getShoppingCartProduct.php",
                    success:function (data) {
                        var html=``;
                        var sum=0;
                        var a=data.length>5?5:data.length;
                        for(var i=0;i<a;i++){
                            var p=data[i];
                            html+=`
                                <li>
                                    <img src="${p.sm}" >
                                    <div class="plist">
                                        <p ><a href="${p.pid}" class="del">x</a></p>
                                        <p><a href="product_detail.js?uid=${p.pid}">植物花艺001</a></p>
                                        <p>
                                            <span>${p.count}</span>
                                            <span>X</span>
                                            <span>￥${p.price}</span>
                                        </p>
                                    </div>
                                </li>
                            `
                            sum+=p.count*p.price;
                        }
                        $("#shop").html(html);
                        $(".sum .total").html("￥"+sum);
                        // 删除购物车中的商品
                        $("#shop_list").on("click","a.del",(e)=>{
                            var pid=$(e.target).attr("href");
                            console.log(pid);
                            e.preventDefault();
                            $.ajax({
                                type:"get",
                                url:"data/cart/deleteCart.php",
                                data:{pid},
                                success:function (data) {
                                    shopping();

                                },
                                error(){alert("网络故障")}
                            })
                        })
                    },
                    error:function () {
                        alert("网络故障请检查")
                    }
                })
            }
            $("nav-shoppingCart").css("right",0);
        },
        error:function () {
            alert("网络故障请检查！")
        }
    })


}
