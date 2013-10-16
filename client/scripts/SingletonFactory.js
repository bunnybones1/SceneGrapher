var SingletonFactory = {
	init:function(classObject) {
		Object.defineProperty(classObject, "instance",{
			set: function(val){
				console.warn("You can't set this.");
			},
			get:  function(){
				if(!classObject._instance) classObject._instance = new classObject();
				return classObject._instance;
			}
		});
	}
}
module.exports = SingletonFactory;