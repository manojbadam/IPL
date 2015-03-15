app.directive('myDirective',function($timeout,$compile,TimeFnService){
	return{
		restrict: 'E',
		templateUrl: "Templates/matchDetails.html",
		//template: "<span>Time Remaining: {{timeDays}} days {{timeHrs}} hrs {{timeMins}} mins {{timeSecs}} Secs</span><br/>Flag Mode - {{FlagMode}}",
		scope: {
			date: "@",
			match: "="
		},
		controller: function($scope,$timeout,TimeFnService){
			var FormatDate = new Date($scope.date);
			var nowDate = new Date();
			 
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			$scope.time = diff;

			var tick = function()
			{
			
			var nowDate = new Date();
			
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			$scope.time = diff;

				if(diff.timeDays === 0 && diff.timeHrs === 0 && diff.timeMins > 29)
				 	$scope.flag = true;
				else
					$scope.flag = false;

			 $timeout(tick,1000);
			 
			}
			$timeout(tick,1000);
		}
	};
});