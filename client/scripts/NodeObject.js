var Class = require('./class/Class');
var Object3D = require('./Object3D');
var NodeObject = new Class({
	Extends: Object3D,
	initialize:function(values) {
		console.log("NEW NODE!");
		this.parent(values);
		this.display = $('<div>', {class:"object", text:"Scene:" + this.name});
		this.display.draggable();
		var tip = new Opentip(this.display, "details...", this.name, {
			background: 'white',
			borderRadius: 5,
			borderWidth: 0,
			color: 'white'
		});

	}
})
module.exports = NodeObject;