var Class = require('./class/Class');
var Selector = require('./Selector');
var Transformer = new Class({
	lastX: -1,
	lastY: -1,
	initialize: function() {
	},
	startDraggingSelected: function() {
		console.log("start");
		this.onDragging = this.onDragging.bind(this)
		document.addEventListener("mousemove", this.onDragging, false);
	},
	stopDraggingSelected: function() {
		console.log("stop");
		document.removeEventListener("mousemove", this.onDragging, false);
		this.lastX = this.lastY = -1;
	},
	onDragging: function(event) {
		if(this.lastX == -1) this.lastX = event.pageX; 
		if(this.lastY == -1) this.lastY = event.pageY; 
		for (var i = 0; i < Selector.instance.selection.length; i++) {
			var transform = Selector.instance.selection[i].transform;
			transform.x += event.pageX - this.lastX;
			transform.y += event.pageY - this.lastY;
			//.css("transform");
		};
		this.lastX = event.pageX;
		this.lastY = event.pageY;
	}
});

var SingletonFactory = require('./SingletonFactory');
SingletonFactory.init(Transformer);

module.exports = Transformer;