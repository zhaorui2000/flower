(()=>{
    function loadCart() {
        $.ajax({
            type:"get",
            url:"data/users/islogin.php",
            success:function (data) {
                if(data.code>0){
                    $.ajax({
                        type:"get",
                        url:"data/cart/getShoppingCartProduct.php",
                        success:function (data) {
                            if(data==""){
                                $(".cart_null").show();
                                $(".list").hide();
                                $(".cart").hide();
                            }else{
                                var html=``;
                                var sum=0;
                                for(p of data){
                                    html+=`
                               <tr>
                                    <td class="product-remove">
                                        <a href="#" class="del" data-toggle="${p.pid}">x</a>
                                        <img src="${p.sm}">
                                        <a href="product_detail.html?pid=${p.pid}" class="product-title">${p.pname}</a>
                                    </td>
                                    <td class="product-price">
                                        ￥${p.price}
                                    </td>
                                    <td class="product-sum" data-toggle="${p.sid}">
                                        <button class="reduce"> - </button>
                                        <span>${p.count}</span>
                                        <button class="add"> + </button>
                                    </td>
                                    <td class="product-total">
                                        ￥${p.count*p.price}
                                    </td>
                                </tr>
                            `
                                    sum+=p.count*p.price;
                                }
                                $("#list").html(html);
                                $(".cart_sum .stotal span").html("￥"+sum);
                                $(".cart_sum .total span").html("￥"+sum);
                            }

                        },
                        error:function () {
                           //
                            // ("网络故障请检查")
                        }
                    })
                }else{
                    location.href="login.html?back="+location.href;
                }
            },
            error:function () {
                alert("网络故障请检查！")
            }
        })
    }
    loadCart();
    // 删除事件
    $("#list").on("click",".del, .reduce ,.add",function (e) {
        e.preventDefault();
        $btn=$(this);
        if($btn.is(".del")){
            var pid=$btn.attr("data-toggle");
            $.ajax({
                type:"get",
                url:"data/cart/deleteCart.php",
                data:{pid},
                success:function () {
                    loadCart();
                },
                error:function () {
                    alert("网络故障请检查！")
                }
            })
        }else if($btn.is(".reduce, .add")){
            var count=$btn.siblings("span").html();
            var sid=$btn.parent().attr("data-toggle");
            if($btn.is(".reduce")){
                if(count>1){
                    count--;
                }
            }else{
                count++;
            }
            $btn.siblings("span").html(count);
            $.ajax({
                type:"get",
                url:"data/cart/updateCart.php",
                data:{count,sid},
                success:function (data) {
                    loadCart();
                },
                error:function () {
                    alert("网络故障");
                }
            })
        }
    })
})()