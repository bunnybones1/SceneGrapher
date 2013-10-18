(function( $ ){
	
	$.fn.clickUnmoved = function( completeCallback ) {
		
		var intervalTimer;
		var active;
		var downX, downY;
		
		return this.mousedown(function(event){
			downX = event.pageX;
			downY = event.pageY;
			active = true;
		}).bind('mouseup mouseout', function(event){
			if(active)
			{
				active = false;
				if(typeof completeCallback !== 'undefined' && event.pageX == downX && event.pageY == downY)
				{
					completeCallback(event);
				}
			}
		});
		
	}
	
})( jQuery );