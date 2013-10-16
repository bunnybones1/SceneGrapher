var Global = require('./Global');
var Class = require('./class/Class');
var BaseObject = require('./BaseObject');

var NodeObject = require('./NodeObject');
var WorkArea = require('./WorkArea');

var Scene = new Class({
	workArea: undefined,
	children: undefined,
	initialize:function(values){
		this.parent(values);

		this.workArea = new WorkArea({
			name: 'workArea'
		});

		this.children = [];
	},
	load:function(url){
		this.currentURL = url;
		$.getJSON(Global.assetsPath + url, this.onLoadComplete.bind(this));
	},
	onLoadComplete:function(obj){
		console.log(obj);
		for (var i = obj.nodes.length - 1; i >= 0; i--) {
			var nodeObject = new NodeObject({name:obj.nodes[i].name});
			this.workArea.display.append(nodeObject.display);
		};
		//document.body.innerHTML = JSON.stringify(url.parse(window.location.href));
	},
	save:function(url){

	}
})

module.exports = Scene;