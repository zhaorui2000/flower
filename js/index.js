(function(){
//首页轮播图
	var timer=setInterval(function(){
		var $img=$("#banner>img.show");
		if($img.next()[0].nodeName!="IMG"){
			$img.removeClass("show")
				.parent().children(":first").addClass("show");
		}else{
			$img.removeClass("show")
				.next().addClass("show");
		}
	},2000);

//今日上新商品动态加载
	$.ajax({
		type:"get",
		url:"data/index/getNewProduct.php",
		success:function(data){
			// console.log(data);
			var html="";
			for(var i=0;i<data.length;i++){
				var {pname,price,pic,pid}=data[i];
				html+=`<li>
					<a href="product_detail.html?pid=${pid}"><img src="${pic}"></a>
					<p class="name"><a href="product_detail.html?pid=${pid}">${pname}</a></p>
					<p class="price">￥${price}</p>
				</li>`
			}
			$("#product_list").html(html);
		},
		error:function () {
			alert("网络故障请检查！");
        }
	})

//限时促销倒计时
	var timer=setInterval(function(){
	//左边
		var last_lf=new Date("2018/12/12 24:00");
		var now=new Date();
		var s_lf=parseInt((last_lf-now)/1000);
		var d_lf=parseInt(s_lf/24/3600);
        d_lf>9 ? d_lf : d_lf="0"+d_lf;
		var h_lf=parseInt(s_lf%(24*3600)/3600);
        h_lf>9 ? h_lf : h_lf="0"+h_lf;
		var m_lf=parseInt(s_lf%3600/60);
        m_lf>9 ? m_lf : m_lf="0"+m_lf;
		var s_lf=parseInt(s_lf%60);
        s_lf>9 ? s_lf : s_lf="0"+s_lf;
		var html_lf=`<span>${d_lf}</span>天<span>${h_lf}</span>时<span>${m_lf}</span>分钟<span>${s_lf}</span>秒`;
		$("#sales_list .left p").html(html_lf);

	//右边
        var last=new Date("2018/7/6 13:23");
        var s=parseInt((now-last)/1000);
        var d=parseInt(s/24/3600);
        d>10 ? d : d="0"+d;
        var h=parseInt(s%(24*3600)/3600);
         h>10 ? h : h="0"+h;
        var m=parseInt(s%3600/60);
        m>10 ? m : m="0"+m;
        var s=parseInt(s%60);
        s>10 ? s : s="0"+s;
        var html=`<span>${d}</span>天<span>${h}</span>时<span>${m}</span>分钟<span>${s}</span>秒`;
        $("#sales_list .right p").html(html);
    },-1000)


//装点家园商品动态加载
	$.ajax({
		type:"get",
		url:"data/index/getDecorateProduct.php",
		success:function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                var {pic, pid, pname, price} = data[i];
                if (i % 2 == 0) {
                    html += `<div class="list">
						<div class="top">
							<a href="product_detail.html?pid=${pid}"><img src="${pic}"></a>
						</div>
						<div class="bottom">
							<p class="name"><a href="product_detail.html?pid=${pid}">${pname}</a></p>
							<p class="price">￥${price}</p>
						</div>
					</div >`;
                } else {
                    html += `<div class="list">
                    <div class="bottom">
                        <p class="name"><a href="product_detail.html?pid=${pid}">${pname}</a></p>
                        <p class="price">￥${price}</p>
                    </div>
                    <div class="top two">
                        <a href="product_detail.html?pid=${pid}"><img src="${pic}"></a>
                    </div>
                </div>`
                }
                $("#decorate_list").html(html);
            }
        }
    })



	//	首页各种动效
	$(window).load(function(){
            $("#bigPic").children().eq(0).css("left",0)
                .next().css("right",0);
	})
    $(window).scroll(function () {
		var top=$(window).scrollTop();
		var	h1=$("#new").offset().top-innerHeight;
		var h2=$("#sales_list").offset().top-innerHeight;
		var h3=$(".kinds").offset().top-innerHeight;
		var h4=$("#serive").offset().top-innerHeight;
		var h5=$("#decorate").offset().top-innerHeight;
		if(top>=h1){
			$("#product_list li").css("top",0);
		}
		if(top>=h2){
			$("#sales_list .right").css("left",0);
			$("#sales_list .left").css("left",0);
		}
		if(top>=h3){
			$(".kinds .kinds_list").css("left",0);
            $(".kinds .picture").css("left",0);
		}
        if(top>=h4){
            $("#serive .serive_list").css("top",0);
        }
        if(top>=h5){
			$("#decorate_list .list").css("top",0);
        }

    })
})()
