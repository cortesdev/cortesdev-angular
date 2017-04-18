
// Expand boxes height jquery
// ==============================
 
$("#optBtn li").click(function() {
    $("#optBtn li").not(this).removeClass("selected").addClass('option');
    $(this).toggleClass("option").toggleClass("selected");
});

$("#optBtn-Credit div").click(function() {
    $("#optBtn-Credit div").not(this).removeClass("selected").addClass('option')
    $(this).toggleClass("option").toggleClass("selected");
	// $('#payCredit').removeClass('inactive');
    $('.currencies').removeClass('active');

});

 