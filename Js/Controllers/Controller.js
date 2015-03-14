app.controller('firstCtrl', function($rootScope,$scope,$http,$timeout,MatchService,TimeFnService,globalService){
  
  $scope.timenow = new Date();
  MatchService.data
    .then(function(res){
           $scope.Matches = res.data;                
         });
  
  var tick = function()
  {
    $scope.timenow = new Date();
    $timeout(tick,1000);
  }

  $timeout(tick,1000);   

  $scope.CompareDate = function(matchdate){
    return TimeFnService.compareFreezeDate(matchdate);
  }; 

  $scope.FreezeDate = function(matchdate){
    return TimeFnService.freezeDate(matchdate);
  }; 
  
});