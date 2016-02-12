(()=>{
    //  加减号点击事件绑定
    var i=$(".count").val();
    $(".add").click(function(){
        i++;
        $(this).siblings(".count").val(i);
    })
    $(".reduce").click(function () {
        if(i>1){i--}
        $(this).siblings(".count").val(i);
    })

    //  加入购物车点击事件
    $(".cart").click(function(){
        $.ajax({
            type:"get",
            url:"data/users/islogin.php",
            success:function (data) {
                if(data.code>0){
                    var pid=location.search.split("=")[1];
                    var count=$(".count").val();
                    $.ajax({
                        type:"get",
                        url:"data/cart/addCart.php",
                        data:{pid,count},
                        success:function (data) {
                            $("#nav-shoppingCart").css("right",0);
                        },
                        error:function () {
                            alert("网络故障")
                        }
                    })
                    shopping();
                }else{
                    alert("请先登录！");
                    location.href="login.html?back="+location.href;
                }
            },
            error:function () {
              alert("网络故障")
            }
        })
    })

    // 根据pid显示商品详情
    var pid=location.href.split("=")[1];
    $.ajax({
        type:"get",
        url:"data/products/getProductById.php",
        data:{pid},
        success:function (data) {
            var {pname,price,ptitle,plive}=data.text;
            // 顶部标题
            var html=`${pname}`;
            $(".name").html(html);
            $(".main_title").html(html);
            var sm=[],md=[],lg=[];
            for(var i=0;i<data.pic.length;i++){
                sm[i]=data.pic[i].sm;
                md[i]=data.pic[i].md;
                lg[i]=data.pic[i].lg;
            }
            //图片显示
            html=`${lg[0]}`;
            $("#lg").css("background-image","url("+html+")")
            html=`<img src="${md[0]}">`;
            $(".md").html(html);
            html="";
            for(i of sm){
                html+=`<a href="${i}"> <img src="${i}"></a>`;
            }
            $(".sm").html(html).on("click","a",function (e) {
                e.preventDefault();
                var pic=$(this).attr("href").split("/")[2];
                var html="img/product_md/"+pic;
                $(".md img ").attr("src",html);
                $("#lg").css("background-image","url(img/product_lg/"+pic+")")
            });
            // 详情显示
            html=`￥${price}`;
            $(".price").html(html);
            html=`花语：${ptitle}`;
            $(".sub_title").html(html);
            html=`生长习性：${plive}`;
            $(".live").html(html);
            // 相关商品展示
            html="";
            for(i of data.about){
                var {pid,pname,price,sm}=i;
                html+=`<li>
                            <a href="product_detail.html?pid=${pid}"><img src="${sm}" ></a>
                            <p class="title"><a href="product_detail.html?pid=${pid}" >${pname}</a></p>
                            <p>￥${price}</p>
                        </li>`
            }
            $(".about_list").html(html);
            // 热卖商品展示
            html=``;
            for(i of data.hotSale){
                var {pid,pname,price,pic}=i;
                html+=`<li>
                            <a href="product_detail.html?pid=${pid}"><img src="${pic}" ></a>
                            <p class="title"><a href="product_detail.html?pid=${pid}" >${pname}</a></p>
                            <p>￥${price}</p>
                        </li>`
            }
            $(".hot_list").html(html);
            // 用户评论加载
            html="";
            if(data.comment==""){
                html=`<li>
                            <p>目前还未有评论</p>
                            <p>只有买过此商品的客户登录后才能发表评论</p>
                        </li>`;
                $(".count").html("用户评论（0）");
            }else{
                for(i of data.comment){
                    var {uname,comment,count}=i;
                    html+=`<li>
                            <p>${uname}</p>
                            <p>${comment}</p>
                        </li>`;
                }
                var html2=`用户评论（${count}）`;
                $(".count").html(html2);
            }
            $(".comment").html(html);


        },
        error:function () {
         // /   alert("网络故障请检查！");
        }
    })

    // 放大镜
    var mask=document.getElementById("mask"),
        smask=document.getElementById("superMask"),
        lgDiv= document.getElementById("lg");
    console.log(lgDiv);
    smask.onmouseover=function(){
        mask.style.display="block";
        lgDiv.style.display="block";
    }
    smask.onmouseout=function(){
        mask.style.display="none";
        lgDiv.style.display="none";
    }
    var MSIZE=125, SMSIZE=250, MAX=(SMSIZE-MSIZE)+21;
    smask.onmousemove=function(e){
        var left=(e.offsetX-MSIZE/2)*2;
        var top=e.offsetY-MSIZE/2;
        if(left<"21") left="21"; else if(left>MAX) left=MAX;
        if(top<"71") top="71"; else if(top>MAX) top=MAX+50  ;
        lgDiv.style.backgroundPosition=
            -(left-18)+"px "+ -(top-71)+"px";
        mask.style.left=left+"px";
        mask.style.top=top+"px";
    }
})()
