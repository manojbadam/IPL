app.service('MatchService',function($http){
	
	this.data = $http.get('App_Data/Matches.json');
})

