app.factory('sessionFactory', ['$rootScope', function($rootScope){
	return {
		get: function(key){
			return JSON.parse(sessionStorage.getItem(key));
		},
		set: function(key,data){
			sessionStorage.setItem(key,JSON.stringify(data));
		},
		remove: function(key,data){
			sessionStorage.removeItem(key,JSON.stringify(data))
		},
		clear: function(){
			sessionStorage.clear()
		}
	}
}])