var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//event listner defined for device ready event
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//Event handlers for the resume and pause events
    function onDeviceReady() {
	//Event lisntners defined
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }

    //Event handlers used as a result of the on pause event beign triggered 
    //This adds 1 to the pause count each time someone goes out of the app
    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	
    //Event handler used as a reuslt of the on resume efent being triggered
    //This adds 1 to the resume count each time someone goes back into the app
    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
