app.directive('testDirective',function($timeout,$compile,TimeFnService,$rootScope,$http){
return{
		restrict: 'E',
		templateUrl: "Templates/TestTemplate.html",
		link: function($scope,el){
			var FormatDate = new Date($scope.match.Matchdate);
			var nowDate = new Date();
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			var tick = function()
			{

			var nowDate = new Date();
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			//$scope.match.timeduration = diff.timeSecs + " secs";
				if(diff.timeDays < 4 && diff.timeHrs < 20 && diff.timeHrs > 0)
				{
					$scope.match.timeduration = diff.timeHrs + " hrs " + diff.timeMins + " mins";
					$scope.match.Displayflag = true;
					$timeout(tick,60000);
					//alert("Entered");
				}
				if(diff.timeDays < 4 && diff.timeHrs < 0 && diff.timeMins > 0)
				{
					$scope.match.timeduration = diff.timeMins + " mins";
					$scope.match.Displayflag = true;
					$timeout(tick,60000);
				}
			}
			//$timeout(tick,10000);
			if(diff.timeDays < 4 && diff.timeHrs < 20 && diff.timeHrs > 0)
			{
				$scope.match.timeduration = diff.timeHrs + " hrs " + diff.timeMins + " mins";
				$scope.match.Displayflag = true;
				$timeout(tick,60000);
			}
			if(diff.timeDays < 4 && diff.timeHrs < 0 && diff.timeMins > 0)
			{
				$scope.match.timeduration = diff.timeMins + " mins";
				$scope.match.Displayflag = true;
				$timeout(tick,10000);
			}
			//$scope.match.timeduration = diff.timeSecs + " secs";
		}
	};
});