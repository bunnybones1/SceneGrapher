var Class = require('./class/Class');
var Mouse = new Class({
	x: 0,
	y: 0,
	initialize: function() {

	}
});

var SingletonFactory = require('./SingletonFactory');
SingletonFactory.init(Mouse);

module.export = Mouse;