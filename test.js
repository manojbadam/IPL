app.controller('testCtrl',function($scope,MatchService){
	
	// var obj = {};
	// obj["MatchID"] = "1";
	// obj["Team1ImgUrl"] = "Images/CSK.gif";
	// obj["Team2ImgUrl"] = "Images/KKR.gif";
	// obj["Team1ID"] = "CSK";
	// obj["Team2ID"] = "KKR";
	// obj["selection"] = "";
	// obj["matchDate"] = "2015-04-08T14:30:00.000Z";
	// obj["matchVenue"] = "Eden Gardens, Kolkata";

	// $scope.matchobj = obj;

	MatchService.data
    .then(function(res){
           $scope.Matches = res.data;                
         });

});