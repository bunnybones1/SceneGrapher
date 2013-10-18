var Class = require('./class/Class');
var Selector = require('./Selector');
var Transformer = require('./Transformer');
var Object3D = require('./Object3D');
var NodeObject = new Class({
	Extends: Object3D,
	display: undefined,
	from: undefined,
	to: undefined,
	initialize:function(values) {
		this.parent(values);
		this.display = $('<div>', {class:"object connection"});
		this.transform.anchorX = 0;
		this.transform.anchorY = 15;
		this.display.css("-webkit-transform-origin", "0% 0%");
		//var from = $(".object #"+values.from.name);
		//var to = $(".object #"+values.to.name);
		console.log(this.from);
		console.log(this.to);
		var tip = new Opentip(this.display, "details...", this.name, {
			background: 'white',
			borderRadius: 5,
			borderWidth: 0
		});
		tip.content="tester";
		this.display.mousedown(this.onMouseDown.bind(this));
		this.from.transform.onChangeMatrixString.add(this.updateTransform.bind(this));
		this.to.transform.onChangeMatrixString.add(this.updateTransform.bind(this));
		this.transform.onChangeMatrixString.add(function(matrixString) {
			this.display.css("-webkit-transform", matrixString);
		}.bind(this));
		this.from.transform.bump();
	},
	onMouseDown: function(event) {
		if(!Selector.instance.isThisSelected(this)) {
			Selector.instance.select(this);
		}
	},
	updateTransform: function() {
		this.transform.x = this.from.transform.x;
		this.transform.y = this.from.transform.y;
		var deltaX = this.to.transform.x - this.from.transform.x ;
		var deltaY = this.to.transform.y - this.from.transform.y;
		var length = Math.sqrt(
			Math.pow(
				deltaX,
				2
			) +
			Math.pow(
				deltaY,
				2
			)
		);
		this.transform.scaleX = length * .01;
		var angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
		this.transform.rotation = angle;
	}
})
module.exports = NodeObject;