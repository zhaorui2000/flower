(function(){
    //分页显示商品
    var kw=location.search.split("=")[1];
    function loadProduct(pno){
        // 正则判断pno 如果不正确则停止执行
        var reg=/^[0-9]{1,}$/;
        if(!reg.test(pno)){
            alert("页码格式不正确");
            return;
        }
        if(kw==undefined){
            $.ajax({
                type:"get",
                url:"data/products/getProductList.php",
                data:{pno},
                success:function (data){
                   // console.log(data);
                //商品列表的动态加载
                    var html="";
                    for(var item of data.product){
                        var {md,pname,price,pid}=item;
                        html+=`<div class="product">
                        <div>
                            <img src="${md}">
                            <div id="details" class="btn" data-torge="${pid}">查看详情</div>
                            <div id="add" class="btn" data-torge="${pid}">加入购物车</div>
                        </div>
                        <p  class="name"><a href="">${pname}</a></p>
                        <p class="price">￥${price}</p>
                    </div>`;
                    }
                    $("#product_list").html(html);

                //页码的动态加载
                    var html="";
                    var pageCount=parseInt(data.pageCount);
                    var pno=parseInt(data.pno);
                    if(pno>1){
                        html+=`<li class="lf"><a href="${pno-1}">上一页</a></li>`;
                    }else{
                        html+=`<li class="lf"><a href="1">上一页</a></li>`;
                    }
                    if(pno-2>0){
                        html+=`<li class="lf"><a href="${pno-2}">${pno-2}</a></li>`
                    }
                    if(pno-1>0){
                        html+=`<li class="lf"><a href="${pno-1}">${pno-1}</a></li>`
                    }
                    html+=`<li class="lf active"><a href="${pno}">${pno}</a></li>`;
                    if(pno+1<=pageCount){
                        html+=`<li class="lf"><a href="${pno+1}">${pno+1}</a></li>`;
                    }
                    if(pno+2<=pageCount){
                        html+=`<li class="lf"><a href="${pno+2}">${pno+2}</a></li>`;
                    }
                    if(pno+3<=pageCount){
                        html+=`<li class="lf"><a href="${pno+3}">${pno+3}</a></li>`;
                    }
                    if(pno+1<=pageCount){
                        html+=`<li class="lf"><a href="${pno+1}">下一页</a></li>`;
                    }else{
                        html+=`<li class="lf"><a href="${pageCount}">下一页</a></li>`;
                    }
                    $("#page_list").html(html);
                },
                error :function () {
                    alert("网络故障请检查！");
                }
            })
        }else{
            kw=decodeURI(kw);
            $.ajax({
                type:"get",
                url:"data/products/getProductByKw.php",
                data:{pno,kw},
                success:function (data){
                    //console.log(data);
                    if(data.count!=0) {
                        //商品列表的动态加载
                        var html = "";
                        for (var item of data.product) {
                            var {md, pname, price,pid} = item;
                            html += `<div class="product">
                           <div>
                               <img src="${md}">
                               <div id="details" class="btn" data-torge="${pid}">查看详情</a></div>
                               <div id="add" class="btn" data-torge="${pid}">加入购物车</a></div>
                           </div>
                           <p  class="name"><a href="">${pname}</a></p>
                           <p class="price">￥${price}</p>
                       </div>`;
                        }
                        $("#product_list").html(html);
                        //页码的动态加载
                        var html = "";
                        var pageCount = parseInt(data.pageCount);
                        var pno = parseInt(data.pno);
                        if (pno > 1) {
                            html += `<li class="lf"><a href="${pno - 1}">上一页</a></li>`;
                        } else {
                            html += `<li class="lf"><a href="1">上一页</a></li>`;
                        }
                        if (pno - 1 > 0) {
                            html += `<li class="lf"><a href="${pno - 1}">${pno - 1}</a></li>`
                        }
                        html += `<li class="lf active"><a href="${pno}">${pno}</a></li>`;
                        if (pno + 1 <= pageCount) {
                            html += `<li class="lf"><a href="${pno + 1}">${pno + 1}</a></li>`;
                        }
                        if (pno + 2 <= pageCount) {
                            html += `<li class="lf"><a href="${pno + 2}">${pno + 2}</a></li>`;
                        }
                        if (pno + 1 <= pageCount) {
                            html += `<li class="lf"><a href="${pno + 1}">下一页</a></li>`;
                        } else {
                            html += `<li class="lf"><a href="${pageCount}">下一页</a></li>`;
                        }
                        $("#page_list").html(html);
                    }else {
                        alert("您查找的商品不存在！请重新输入")
                    }
                },
                error :function () {
                   alert("网络故障请检查！");
                    }
            })
        }
    }
    loadProduct(1);

    // 页码绑定点击事件
    $("#page_list").on("click","li a",function(e){
        e.preventDefault();
        var pno=parseInt($(this).attr("href"));
        loadProduct(pno);
    })

    // 查看详情点击事件
    $("#product_list").on("click",".product #details",function () {
        var pid=$(this).attr("data-torge");
        location.href="product_detail.html?pid="+pid;
    })
    // 加入购物车点击事件
    $("#product_list").on("click",".product #add",function () {
        // 判断用户是否登录
        var pid=$(this).attr("data-torge");
        $.ajax({
            type:"get",
            url:"data/users/islogin.php",
            success:function (data) {
                if(data.code>0){
                    $.ajax({
                        type:"get",
                        url:"data/cart/addCart.php",
                        data:{pid},
                        success:function (data) {
                           if(data=="ok"){
                               $("#nav-shoppingCart").css("right",0);
                           }

                        },
                        error:function () {
                          alert("网络故障请检查")
                        }
                    })
                    shopping();
                }else{
                    alert("请先登录！")
                    location.href="login.html?back="+location.href;
                }
            },
            error:function () {
                alert("网络故障请检查！")
            }
        })
    })
})()