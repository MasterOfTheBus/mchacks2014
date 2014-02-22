// Select the highlighted text
var selectedText = '';
function selectText(e) {
	// get the selection
    selectedText = (document.all) ? document.selection.createRange().text : document.getSelection();
	
	// do something with the selection
	//document.getElementById('input').value = selectedText;	
}

document.onmouseup = selectText;
if (!document.all) document.captureEvents(Event.MOUSEUP);