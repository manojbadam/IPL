app.controller('testCtrl',function($scope,MatchService){
	
	MatchService.data
    .then(function(res){
           $scope.Matches = res.data;                
         });

});