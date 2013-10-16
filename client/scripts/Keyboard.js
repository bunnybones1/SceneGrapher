var Class = require('./class/Class');
var Keyboard = new Class({
	keyStates: undefined,
	initialize: function() {
		if(Keyboard._instance) throw("Singleton enforcer!");
		this.keyStates = new Array();
		for (var i = 256 - 1; i >= 0; i--) {
			this.keyStates[i] = false;
		};
		document.addEventListener("keydown", this.onKeyDown.bind(this), false);
		document.addEventListener("keyup", this.onKeyUp.bind(this), false);
	},
	onKeyDown:function(event){
		this.keyStates[event.keyCode] = true;
		console.log(event.keyCode);
	},
	onKeyUp:function(event){
		this.keyStates[event.keyCode] = false;
	},
	isDown:function(keyCode){
		return this.keyStates[keyCode];
	},
});

var SingletonFactory = require('./SingletonFactory');
SingletonFactory.init(Keyboard);

module.exports = Keyboard;

Keyboard.SHIFT = 16;
Keyboard.CTRL = 17;
Keyboard.ALT = 18;