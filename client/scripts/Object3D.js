var Class = require('./class/Class');
var BaseObject = require('./BaseObject');
var Transform = require('./Transform');
var Object3D = new Class({
	Extends: BaseObject,
	transform: undefined,
	initialize:function(values) {
		this.parent(values);
		var transformValues = values.hasOwnProperty("transform") ? values.transform : {};
		this.transform = new Transform(transformValues);
	}
})
module.exports = Object3D;