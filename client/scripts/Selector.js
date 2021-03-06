var Class = require('./class/Class');
var Keyboard = require('./Keyboard');
var Selector = new Class({
	selection: undefined,
	initialize: function() {
		this.selection = [];
	},
	isThisSelected:function(object) {
		return this.selection.indexOf(object) != -1;
	},
	select: function(object) {
		if(!Keyboard.instance.isDown(Keyboard.CTRL)) this.deselectAll();
		if(this.selection.indexOf(object) == -1) {
			this.selection.push(object);
			object.display.addClass("selected");
		}
	},
	deselect: function(object) {
		if(this.selection.indexOf(object) != -1) {
			this.selection.push(object);
			object.display.removeClass("selected");
		}
	},
	deselectAll: function() {
		for (var i = this.selection.length - 1; i >= 0; i--) {
			this.selection[i].display.removeClass("selected");
		};
		this.selection.splice(0, this.selection.length);
	},
	toggleSelect: function(object) {
		if(this.selection.indexOf(object) == -1) {
			this.select(object);
		} else {
			this.deselect(object);
		}
	}
});

var SingletonFactory = require('./SingletonFactory');
SingletonFactory.init(Selector);

module.exports = Selector;