// Select the highlighted text
var selectedText = '';
function selectText() {
	// get the selection
    selectedText = (document.all) ? document.selection.createRange().text : document.getSelection();
	console.log("text: " + selectedText);

	// Query Translation
	makePopup();
}

function makePopup() {
	// Make the popup -- probably won't work
	/*
	var translationGenerator = {
	showTranslation: function() {
		var trans = document.createElement('input');
		document.body.appendChild(trans);
	}*/
}
	
	// Get the translation
	getTranslation();
}

function getTranslation() {
	// work stuff
	
	// show the translation
	showTranslation();
}

function showTranslation()  {
	// 
}

document.onmouseup = selectText;

