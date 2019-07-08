setFontSize();
window.addEventListener("resize", setFontSize, false);

function setFontSize() {
	var clientW = document.documentElement.clientWidth;
	if(clientW > 750) {
		clientW = 750
	}
	document.documentElement.style.fontSize = clientW / 7.5 + "px"
};