var Class = require('./class/Class');
var BaseObject = require('./BaseObject');
var Transform = new Class({
	Extends: BaseObject,
	_x: 0,
	x:{
	    get: function() {
	      return this._x;
	    },
	    set: function( value ) {
	      this._x = value;
	      this.updateMatrix();
	    }
	},
	_y: 0,
	y:{
	    get: function() {
	      return this._y;
	    },
	    set: function( value ) {
	      this._y = value;
	      this.updateMatrix();
	    }
	},
	_anchorX: 0,
	anchorX:{
	    get: function() {
	      return this._anchorX;
	    },
	    set: function( value ) {
	      this._anchorX = value;
	      this.updateMatrix();
	    }
	},
	_anchorY: 0,
	anchorY:{
	    get: function() {
	      return this._anchorY;
	    },
	    set: function( value ) {
	      this._anchorY = value;
	      this.updateMatrix();
	    }
	},
	_scaleX: 1,
	scaleX:{
	    get: function() {
	      return this._scaleX;
	    },
	    set: function( value ) {
	      this._scaleX = value;
	      this.updateMatrix();
	    }
	},
	_scaleY: 1,
	scaleY:{
	    get: function() {
	      return this._scaleY;
	    },
	    set: function( value ) {
	      this._scaleY = value;
	      this.updateMatrix();
	    }
	},
	_rotation: 0,
	rotation:{
	    get: function() {
	      return this._rotation;
	    },
	    set: function( value ) {
	      this._rotation = value;
	      this.updateMatrix();
	    }
	},
	onChangeMatrixString: undefined,
	initialize: function(values) {
		this.onChangeMatrixString = new signals.Signal();
		this.parent(values);
	},
	updateMatrix:function() {
		//TODO reimplement this part using sylvester.js to be compatible with non-webkit browsers
		var matrix = new WebKitCSSMatrix();
		var anchorMatrix = new WebKitCSSMatrix();
		var scaleMatrix = new WebKitCSSMatrix();
		var positionMatrix = new WebKitCSSMatrix();
		var rotationMatrix = new WebKitCSSMatrix();
		anchorMatrix = anchorMatrix.translate(-this.anchorX, -this.anchorY);
		scaleMatrix = scaleMatrix.scale(this.scaleX, this.scaleY);
		rotationMatrix = rotationMatrix.rotate(this.rotation);
		positionMatrix = positionMatrix.translate(this.x, this.y);
		matrix = matrix.multiply(positionMatrix);
		matrix = matrix.multiply(rotationMatrix);
		matrix = matrix.multiply(anchorMatrix);
		matrix = matrix.multiply(scaleMatrix);
		this.onChangeMatrixString.dispatch(matrix.toString());
	},
	bump:function() {
		this.updateMatrix();
	}
});

module.exports = Transform;