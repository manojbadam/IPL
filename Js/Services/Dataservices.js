 // app.service('MatchService',function($http){
	
 // 	this.data = $http.get('details/Matches.json');
 // })

app.service('MatchService',function($http){
	this.data = function(uname){
		return $http.post('http://localhost:5433/getMatcheDetails',{"username":uname});
	}
	this.postdata = function(uname,mid,sel){
		$http.post('http://http://localhost:5433/postMatchPred',{"username":uname,"matchid":mid,"selection":sel}).success(function(html){
			return true;
		}).error(function(data,status,headers,config){
			return false;
		});
	};
})

