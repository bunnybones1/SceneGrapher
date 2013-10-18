(function( $ ){
	
	$.fn.clickHold = function( completeCallback ) {
		
		var intervalTimer;
		var active;
		
		return this.mousedown(function(event){
			active = true;
			intervalTimer = setInterval(function(){ completeCallback(event); }, 500);
		}).bind('mouseup mouseout', function(){
			if(active)
			{
				active = false;
				clearInterval(intervalTimer);
			}
		});
		
	}
	
})( jQuery );