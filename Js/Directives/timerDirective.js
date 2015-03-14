app.directive('myDirective',function($timeout,$compile,TimeFnService){
	return{
		restrict: 'E',
		templateUrl: "/Templates/matchDetails.html",
		scope: {
			date: "@"
		},
		controller: function($scope,$timeout){
			//$scope.count = 10;
			 var FormatDate = new Date($scope.date);
			 var nowDate = new Date();
			 
			 // var t1 = FormatDate.getTime();
			 // var t2 = nowDate.getTime();
			 // var diff = t1-t2;
			 // $scope.timeDays = parseInt((diff)/(24*3600*1000));
			 // diff = diff - 	$scope.timeDays*24*3600*1000;
			 // $scope.timeHrs = parseInt((diff)/(3600*1000));
			 // diff = diff - $scope.timeHrs*3600*1000;
			 // $scope.timeMins = parseInt((diff)/(60*1000));
			 // diff = diff - $scope.timeMins * 60 * 1000;
			 // $scope.timeSecs = parseInt((diff)/(1000));
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			$scope.timeDays = diff["timeDays"];
			$scope.timeHrs = diff["timeHrs"];
			$scope.timeMins = diff["timeMins"];
			$scope.timeSecs = diff["timeSecs"];

			var tick = function()
			{
			
			var nowDate = new Date();
			 // var t1 = FormatDate.getTime();
			 // var t2 = nowDate.getTime();
			 // var diff = t1-t2;
			 // $scope.timeDays = parseInt((diff)/(24*3600*1000));
			 // diff = diff - 	$scope.timeDays*24*3600*1000;
			 // $scope.timeHrs = parseInt((diff)/(3600*1000));
			 // diff = diff - $scope.timeHrs*3600*1000;
			 // $scope.timeMins = parseInt((diff)/(60*1000));
			 // diff = diff - $scope.timeMins * 60 * 1000;
			 // $scope.timeSecs = parseInt((diff)/(1000));
			var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			$scope.timeDays = diff["timeDays"];
			$scope.timeHrs = diff["timeHrs"];
			$scope.timeMins = diff["timeMins"];
			$scope.timeSecs = diff["timeSecs"];

			 if($scope.timeDays === 0 && $scope.timeHrs === 0 && $scope.timeMins > 29)
			 	$scope.flag = true;
			 else
			 	$scope.flag = false;

			 if($scope.timeDays > 0 || $scope.timeHrs > 0 || $scope.timeMins > 0 || $scope.timeSecs > 0)					 		
			 	$timeout(tick,1000);
			}
			$timeout(tick,1000);
		}
	};
});