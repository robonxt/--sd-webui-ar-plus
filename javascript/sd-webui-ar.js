if ("undefined" === typeof arsp__ar_button_titles) {
	arsp__ar_button_titles = {};
}

arsp__ar_button_titles["Calc"] = "Show or hide the aspect ratio calculator";
arsp__ar_button_titles["\u{21c5}"] = "Swap width and height values";
arsp__ar_button_titles["\u2B07\ufe0f"] = "Get dimensions from txt2img/img2img sliders";
arsp__ar_button_titles["\u{1f5bc}"] = "Get dimensions from image on current img2img tab";
arsp__ar_button_titles["Calculate Height"] = "Calculate new height based on source aspect ratio";
arsp__ar_button_titles["Calculate Width"] = "Calculate new width based on source aspect ratio";
arsp__ar_button_titles["Apply"] = "Apply calculated width and height to txt2img/img2img sliders";
arsp__ar_button_titles["\uD83D\uDD0D"] = "Round dimensions to the nearest multiples of 4 (1023x101 => 1024x100)";

onUiUpdate(function(){
	gradioApp().querySelectorAll('#arsp__txt2img_container_aspect_ratio button, #arsp__img2img_container_aspect_ratio button').forEach(function(elem){
		tooltip = arsp__ar_button_titles[elem.textContent];
		if(tooltip){
		 	elem.title = tooltip;
		}
	})
})
