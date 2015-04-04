app.controller("testCtrl",function($scope,$http,MatchService,$rootScope){
	$scope.resultHTML = "Test Html";
	$scope.Displayflag=true;
	MatchService.data.then(function(res){
		$scope.matches = res.data;
	});

	$scope.Insert = function(mid,sel){
		$http.post("http://localhost:5433/postMatchPred",{"username":"manoj", "matchid" : mid,"selection": sel}).success(function(html){
			$scope.resultHTML = html;
		});
	}
	$scope.submit = function(match){
		$http.post("http://localhost:5433/postMatchPred",{"username":$rootScope.user, "matchid" : match.matchid,"selection": match.selection}).success(function(html){
			$scope.resultHTML = html;
		});
	}


});	