(function(){
	// 用户信息与订单详情的切换
    function user_info() {
        var href=location.href.split("#")[1];
        if(href=="user_information"){
            $("#user_information").show().siblings().hide().parent().addClass("active").siblings().removeClass("active");
        }else if(href=="user_order"){
            $("#user_order").show().siblings().hide().parent().addClass("active").siblings().removeClass("active");
        }
    }
// 首页引入
// 	var link=document.createElement("link");
// 	link.href="css/header.css";
//     link.rel="stylesheet";
    var html=`<link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="font/iconfont.css">`
	$("head").append(html);
	$.ajax({
		type:"get",
		url:"header.html",
		success:function(data){
			$("#header").html(data);

			// 放大镜点击事件
			$(".search").click(function(e){
				e.preventDefault();
				$("#search").show();
			 })
			// 搜索框取消点击事件
            $("#cancel").click(function(){
                $(this).parent().hide();
            })
			//搜索框点击确定商品搜索事件
			$("#confirm").click(function(){
				var kw=$(this).parent().children("input").val();
				if(kw.trim()!=""){
					var url="product.html?kw="+kw;
					location.href=url;
                }
            })
			//回车按下跳转事件
			$("#search input").keyup(function(e){
				if(e.keyCode==13){
					$("#confirm").click();
				}
			})
				// // 跳转后搜索框显示关键词
				// if(location.search!==""){
				 //    $("#search input").val(decodeURI(location.search.split("=")[1]));
				// }
			//用户栏点击事件
			$("#login").click(function(e){
				//判断用户是否已经登录
				e.preventDefault();
				$.ajax({
					type:"get",
					url:"data/users/islogin.php",
					success:function (data) {
                        if(data.code=="0"){
                            location.href="login.html?back="+location.href;
						}else{
                        	// location.href="user_message.html";
                            $("#user_menu").toggle().on("click","a",(e)=>{
                            	e.preventDefault();
                            	if($(e.target).hasClass("user_info")){
                            		location.href="user_message.html#user_information";
                            		user_info();
								}else if($(e.target).hasClass("user_cart")){
                            		location.href="user_message.html#user_order";
                            		user_info();
								}else{
                                    localStorage.clear();
                                    $.ajax({
                                        type:"get",
                                        url:"data/users/signout.php"
                                    })
                                    location.href="index.html";
								}
                            });
							// 退出登录点击事件
						}
                    },
					error:function () {
						alert("网络故障请检查！");
                    }
				})
			})


		}
	})
})()