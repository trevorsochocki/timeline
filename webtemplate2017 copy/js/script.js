/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//listen for click of scroll
	$("#right-scroll").click(function(){

		// store the #timeline current left scroll position
		var left = $("#timeline").scrollLeft();

		// animate scrolling to the right
		$("#timeline").animate({
			scrollLeft: left + 200
		});

	});

















}); //end document.ready block
