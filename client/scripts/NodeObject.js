var Class = require('./class/Class');
var Selector = require('./Selector');
var Transformer = require('./Transformer');
var Object3D = require('./Object3D');
var NodeObject = new Class({
	Extends: Object3D,
	display: undefined,
	initialize:function(values) {
		this.parent(values);
		this.display = $('<div>', {class:"object node"});
		this.display.append($('<div>', {class:"dummy"}));
		this.display.append($('<div>', {class:"textArea", text:"Scene: " + this.name}));
		this.transform.anchorX = 50;
		this.transform.anchorY = 50;
		this.display.css("-webkit-transform-origin", "0% 0%");

		var tip = new Opentip(this.display, "details...", this.name, {
			background: 'white',
			borderRadius: 5,
			borderWidth: 0
		});
		tip.content="tester";
		this.display.mousedown(this.onMouseDown.bind(this)).bind(
			"mouseup", 
			this.onMouseUpOrOut.bind(this)
		);
		this.transform.onChangeMatrixString.add(function(matrixString) {
			this.display.css("-webkit-transform", matrixString);
		}.bind(this));
		this.transform.x = this.transform.x;
	},
	onMouseDown: function(event) {
		if(!Selector.instance.isThisSelected(this)) {
			Selector.instance.select(this);
		}
		Transformer.instance.startDraggingSelected();
	},
	onMouseUpOrOut: function(event) {
		Transformer.instance.stopDraggingSelected();
	}
})
module.exports = NodeObject;