(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/footer.css";
	$("head").append(link);
	$.ajax({
		type:"get",
		url:"footer.html",
		success:function(data){
			$("#footer").html(data);
		},
		error:function () {
			alert("网络故障请检查！");
        }
	})
})()