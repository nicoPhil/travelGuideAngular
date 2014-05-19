app.factory('travelService', function () {

	var mock = [{title:'super voyage',startDate:'28 aout',endDate:'12 octobre',id:1},
				{title:'ailleurs',startDate:'15 aout',endDate:'17 aout',id:2},
				{title:'canada',startDate:'15 aout',endDate:'17 aout',id:3},
				{title:'canada',startDate:'15 aout',endDate:'17 aout',id:4},
				{title:'france',startDate:'15 aout',endDate:'17 aout',id:5},
				{title:'canada',startDate:'15 aout',endDate:'17 aout',id:6},
				{title:'maroc',startDate:'15 aout',endDate:'17 aout',id:7},
				{title:'canada',startDate:'15 aout',endDate:'17 aout',id:8},
				];

    return {
        getTravelList: function (callback) {
        	callback(mock);
        },
        getTravelById:function(id, callback){
        	callback(_.where(mock,{'id':parseInt(id)})[0]);
        }
    }
});