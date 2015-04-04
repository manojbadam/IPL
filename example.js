// var app = angular.module("app",[]);

app.controller("testCtrl",function($scope,$http,MatchService,$rootScope){
	$scope.resultHTML = "Test Html";

	MatchService.data.then(function(res){
		$scope.matches = res.data;
	})

	$scope.Insert = function(){
		alert("Hello");
		$http.post("http://localhost:5433/postMatchPred",{"username":"manoj", "matchid" : "1","selection": "KKR"}).success(function(html){
			$scope.resultHTML = html;
		});
	}

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
	

});