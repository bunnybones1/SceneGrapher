var Class = require('./class/Class');
var BaseObject = require('./BaseObject');
var WorkArea = new Class({
	Extends: BaseObject,
	display: undefined,
	initialize:function(values) {
		this.parent(values);
		this.display = $('<div>', {id:"workArea"});
	}
})
module.exports = WorkArea;