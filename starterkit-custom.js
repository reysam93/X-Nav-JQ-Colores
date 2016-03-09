// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
		$(this).fadeOut("slow");
    });
    $("h3").click(function() {
		$("dt").fadeIn("slow");
    });
    $("#orderedlist").addClass("red");
    var elements = $("#orderedlist li");
    elements.addClass("blue");
    console.log("before")
    $(elements[elements.length-1]).on({
    	mouseenter: function(){
    		$(this).addClass("green");
    	},
    	mouseleave: function(){
    		console.log("handler")
    		$(this).removeClass("green")
    		$(this).addClass("blue")
    	}
    });
});