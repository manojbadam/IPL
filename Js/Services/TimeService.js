app.service('TimeFnService',function(globalService){
	this.compareDate = function(dateA){
		var a = new Date(dateA);
    	var b = new Date();

    	var msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
    	var msDateB = Date.UTC(b.getFullYear(), b.getMonth()+1, b.getDate());

    	if(a>b)
      		return 1;
    	else
      		return 0;
	};
	this.compareFreezeDate = function(dateA){
		var a = decreaseDate(dateA,globalService.freezeday,globalService.freezehrs,globalService.freezemin,globalService.freezesec);
    	var b = new Date();

    	var msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
    	var msDateB = Date.UTC(b.getFullYear(), b.getMonth()+1, b.getDate());

	    if(a>b)
	      return 1;
	    else
	      return 0;
	};
	this.freezeDate = function(matchDate){
		return decreaseDate(matchDate,globalService.freezeday,globalService.freezehrs,globalService.freezemin,globalService.freezesec)
	};

	this.decDate = function(matchdate,days,hrs,mins,secs){
		var a = new Date(matchdate);
    	a.setDate(a.getDate() - days);
    	a.setTime(a.getTime() - hrs*3600000);
    	a.setTime(a.getTime() - mins*60000);
    	a.setTime(a.getTime() - secs*1000);
    	return a;
	};
	
	var decreaseDate = function(matchdate,days,hrs,mins,secs){
		var a = new Date(matchdate);
    	a.setDate(a.getDate() - days);
    	a.setTime(a.getTime() - hrs*3600000);
    	a.setTime(a.getTime() - mins*60000);
    	a.setTime(a.getTime() - secs*1000);
    	return a;
	};

	this.incDate = function(dateA,days,hrs,mins,secs){
		var a = new Date(dateA);
		a.setDate(a.getDate() + days);
    	a.setTime(a.getTime() + hrs*3600000);
    	a.setTime(a.getTime() + mins*60000);
    	a.setTime(a.getTime() + secs*1000);
    	return a;
	};

	var increaseDate = function(dateA,days,hrs,mins,secs){
		var a = new Date(dateA);
		a.setDate(a.getDate() + days);
    	a.setTime(a.getTime() + hrs*3600000);
    	a.setTime(a.getTime() + mins*60000);
    	a.setTime(a.getTime() + secs*1000);
    	return a;
	};

	this.caluclateTimeDiff = function(dateA,dateB){
		var obj = {};
		var t1 = dateA.getTime();
		var t2 = dateB.getTime();
		var diff = t1-t2;
		obj["timeDays"] = parseInt((diff)/(24*3600*1000));
		diff = diff - 	obj["timeDays"]*24*3600*1000;
		obj["timeHrs"] = parseInt((diff)/(3600*1000));
		diff = diff - obj["timeHrs"]*3600*1000;
		obj["timeMins"] = parseInt((diff)/(60*1000));
		diff = diff - obj["timeMins"]* 60 * 1000;
		obj["timeSecs"] = parseInt((diff)/(1000));
		return obj;
	}
})