app.directive('editableDiv', function () {
    return {
      restrict: 'E',
      templateUrl:'directives/editableDiv/editableDiv.html',
      scope:{
      	value:'=',
      	label:'@'
      },
      link: function (scope, elem, attrs) {
       scope.change = function(){
       	scope.isWrite = !scope.isWrite;
       }
      }
    }
});