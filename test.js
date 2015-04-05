app.controller('testCtrl',function($scope,MatchService,TimeFnService){
	
	var Matches = [];

	MatchService.data("basava").then(function(res){
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

	})

});