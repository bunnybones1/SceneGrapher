var Class = require('./class/Class');
var Mouse = new Class({
	x: 0,
	y: 0,
	mouseDownSignal: undefined,
	mouseUpSignal: undefined,
	clickWithoutMovingSignal: undefined,
	initialize: function() {
		clickWithoutMovingSignal = new Signal();
	}
});

var SingletonFactory = require('./SingletonFactory');
SingletonFactory.init(Mouse);

module.export = Mouse;