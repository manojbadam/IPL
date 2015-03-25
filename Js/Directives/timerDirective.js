app.directive('myDirective',function($timeout,$compile,TimeFnService,$rootScope,$http){
	return{
		restrict: 'E',
		templateUrl: "Templates/matchDetails.html",
		//template: "<span>Time Remaining: {{timeDays}} days {{timeHrs}} hrs {{timeMins}} mins {{timeSecs}} Secs</span><br/>Flag Mode - {{FlagMode}}",
		scope: {
			date: "@",
			match: "="
		},
		controller: function($scope,$timeout,TimeFnService,$rootScope,$http){
			// var FormatDate = new Date($scope.date);
			// var nowDate = new Date();
			// var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			// $scope.time = diff;
			// var tick = function()
			// {
			// var nowDate = new Date();
			// var diff = TimeFnService.caluclateTimeDiff(FormatDate,nowDate);
			// $scope.time = diff;

			// 	if(diff.timeDays === 0 && diff.timeHrs === 0 && diff.timeMins > 29)
			// 	 	$scope.flag = true;
			// 	else
			// 		$scope.flag = false;
			//  $timeout(tick,1000);
			// }
			// $timeout(tick,1000);
			$scope.submit = function(obj){
				alert($rootScope.user);
				alert(obj.matchid + " " +obj.selection);
				//alert(MatchService.postdata($rootScope.user,obj.matchid,obj.selection));
				$http.post('http://http://localhost:5433/postMatchPred',{"username":$rootScope.user,"matchid":obj.matchid,"selection":obj.selection}).success(function(html){
					$scope.html = html;
				}).error(function(data, status, headers, config){
					alert("error");
				})

			}
		}
	};
});