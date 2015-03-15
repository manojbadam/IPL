app.service('MatchService',function($http){
	
	this.data = $http.get('details/Matches.json');
})

