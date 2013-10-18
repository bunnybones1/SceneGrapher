var Class = require('./class/Class');
var BaseObject = require('./BaseObject');
var Selector = require('./Selector');
var WorkArea = new Class({
	Extends: BaseObject,
	display: undefined,
	initialize:function(values) {
		this.parent(values);
		this.display = $('<div>', {id:"workArea"});
		//this.display.mousedown(this.onObjectMouseDown.bind(this));
		//this.display.mouseup(this.onObjectMouseUp.bind(this));
		this.display.clickUnmoved(this.onClickUnmoved.bind(this));
		this.display.clickHold(this.onClickHold.bind(this));
		//document.addEventListener("mouseup", function(val){console.log(val)}, false);
		//document.addEventListener("mousemove", function(val){console.log(val)}, false);
	},
	onClickUnmoved: function(event) {
		if($(event.target)[0] == this.display[0]) {
			Selector.instance.deselectAll();
		}
	},
	onClickHold: function(event) {
		if($(event.target)[0] == this.display[0]) {
			Selector.instance.deselectAll();
		}
		
	},
	onObjectMouseDown: function(val) {
		console.log("down");
	},
	onObjectMouseUp: function(val) {
		console.log("up");
	}
})
module.exports = WorkArea;