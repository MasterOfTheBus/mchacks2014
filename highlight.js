// Select the highlighted text
var selectedText = '';
function selectText() {
	// get the selection
    selectedText = (document.all) ? document.selection.createRange().text : document.getSelection();
	console.log("text: " + selectedText);

	// Query Translation
	makePopup(selectedText);
}

function makePopup(selectedText) {
	// Make the popup -- probably won't work
	/*
	var translationGenerator = {
	showTranslation: function() {
		var trans = document.createElement('input');
		document.body.appendChild(trans);
	}*/
	
	// Get the translation
	getTranslation(selectedText);
}

function getTranslation(selectedText) {
	var language = "#French";
	// work stuff
	$.get({ "http://en.wikitionary.org/wiki/" + selectedText + language,
			function(data) {
			console.log(data);
		}
	}
	
	// show the translation
	showTranslation();
}

function showTranslation()  {
	// 
}

document.onmouseup = selectText;

