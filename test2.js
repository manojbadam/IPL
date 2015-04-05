app.controller("testCtrl",function($scope,$http,MatchService,$rootScope,TimeFnService){
	$scope.resultHTML = "Test Html";
	$scope.Displayflag=true;
	$scope.uname = $rootScope.user;
	MatchService.data($rootScope.user).then(function(res){
		Matches = res.data;
		$scope.Matches = Matches;
		
		var finishedMatches = [];
     	var upcomingMatches = [];

	   for (index = 0; index < Matches.length; ++index) {
    			match = Matches[index];
    		if(TimeFnService.compareDate(new Date('2015-04-15'),match.Matchdate) == 1)
    			finishedMatches.push(match);
    		else
    			upcomingMatches.push(match);
		};

		$scope.finishedMatches = finishedMatches;
    	$scope.upcomingMatches = upcomingMatches;
	});

	$scope.Insert = function(mid,sel){
		$http.post("http://localhost:5433/postMatchPred",{"username":"manoj", "matchid" : mid,"selection": sel}).success(function(html){
			$scope.resultHTML = html;
		});
	}
	$scope.submit = function(match){
		$http.post("http://localhost:5433/postMatchPred",{"username":$rootScope.user, "matchid" : match.matchid,"selection": match.selection}).success(function(html){
			$scope.resultHTML = html;
			match.dbselection = 1;
		});
	}


});	