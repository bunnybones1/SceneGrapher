var Global = require('./Global');
var Class = require('./class/Class');
var BaseObject = require('./BaseObject');

var NodeObject = require('./NodeObject');
var ConnectionObject = require('./ConnectionObject');
var WorkArea = require('./WorkArea');

var Scene = new Class({
	workArea: undefined,
	sceneData: undefined,
	nodes: undefined,
	connections: undefined,
	initialize:function(values){
		this.parent(values);

		this.workArea = new WorkArea();

		this.nodes = {};
		this.connections = {};
	},
	load:function(url){
		this.currentURL = url;
		$.getJSON(Global.assetsPath + url, this.onLoadComplete.bind(this));
	},
	onLoadComplete:function(jsonObject){
		for (var i = jsonObject.nodes.length - 1; i >= 0; i--) {
			var nodeObject = new NodeObject(jsonObject.nodes[i]);
			this.workArea.display.append(nodeObject.display);
			this.nodes[nodeObject.name] = nodeObject;
		};
		for (var i = jsonObject.connections.length - 1; i >= 0; i--) {
			var data = jsonObject.connections[i];
			var connectionObject = new ConnectionObject({
				name: data.name,
				from: this.nodes[data.from], 
				to: this.nodes[data.to]
			});
			this.workArea.display.append(connectionObject.display);
			this.connections[connectionObject.name] = connectionObject;
		};
		this.sceneData = jsonObject;
	},
	save:function(url){

	}
})

module.exports = Scene;