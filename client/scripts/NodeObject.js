var Class = require('./class/Class');
var Selector = require('./Selector');
var Object3D = require('./Object3D');
var NodeObject = new Class({
	Extends: Object3D,
	initialize:function(values) {
		this.parent(values);
		this.display = $('<div>', {class:"object", text:"Scene:" + this.name});
		this.display.draggable();
		var tip = new Opentip(this.display, "details...", this.name, {
			background: 'white',
			borderRadius: 5,
			borderWidth: 0
		});
		tip.content="tester";
		this.display.mousedown(this.onClick.bind(this));
		console.log(tip);
	},
	onClick: function(val) {
		Selector.instance.select(this);
	}
})
module.exports = NodeObject;