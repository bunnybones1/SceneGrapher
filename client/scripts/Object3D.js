var Class = require('./class/Class');
var BaseObject = require('./BaseObject');
var Object3D = new Class({
	Extends: BaseObject,
	initialize:function(values) {
		this.parent(values);
	}
})
module.exports = Object3D;