$(document).ready(function(){

	$(".tabs li").on("click", function() {
		$(".tabs li").removeClass("activeTab");
		$(this).addClass("activeTab");

		var index = $(this).index("li");

		$(".content p").removeClass("activeContent");
		$(".content p").eq(index).addClass("activeContent");
	});
});