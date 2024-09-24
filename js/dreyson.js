//grab a referenc to all the menu links
var $menuLink = document.querySelectorAll(".menu-item > a");

function displayInfoPanelForElement(event) {
	var $anchor = event.target;
	var $infoPanel =$anchor.parentNode.querySelector(".menu-item-info");

	//make the panel visible!
	//note: classList is available only on IE10+
	$infoPanel.classList.add("is-visible");

}

function hideInfoPanelForElement(event) {

	var $anchor = event.target;
	var $infoPanel = $anchor.parentNode.querySelector("menu-item-info");
}

	//make the panel visible!
	//note: classlist is available only on IE10+
	$infoPanel.classList.remove("is-visible");



//iterate on the list and register a call back when the user hovers over the anchor link
for (var i = 0; i < = $menuLink. length; i++) {
//we are on each anchor element in the menu
//register a call back when the mouse hovers on the link

var	$anchor = $menuLinks[i];

$anchor.addEventListener("mouseover", displayInfoPanelForElement);
$anchor.addEventListener("mouseout", hideInfoPanelForElement);

}

//or we use

function displayInfoPanel(evt) {
  console.log(this).siblings(".menu-item-info").addClass("is-visible");
}

function hideInfoPanel(evt){
   console.log(this).siblings(".menu-item-info").removeClass("is-visible");
}

$(".menu-item > a").on("mouseover", displayInfoPanel);
$(".menu-item > a").on("mouseout", hideInfoPanel);


//or the shorter process

function toggleInfoPanel(evt) {
  $(this).siblings('.menu-item-info').toggleClass('is-visible');
}



$('.menu-item > a').on("mouseover", toggleInfoPanel);
$('.menu-item > a').on("mouseout", toggleInfoPanel);

//or use the 

function toggleInfoPanel(anchor) {
var infoPanelEl = $(this).siblings('.menu-item-info');
infoPanelEl.toggleClass('is-visible');
}
$('.menu-item > a')
.mouseover(toggleInfoPanel)
.mouseout(toggleInfoPanel);