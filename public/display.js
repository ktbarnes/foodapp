angular.module('Display',[])
.controller('DisplayCtrl', [ '$scope', 'Pictures', function($scope, Pictures) {
  $scope.pics = $scope.pics || [];

  $scope.getPics = function() {
    Pictures.getAll()
    .then(function(resp) {
      $scope.pics = [];
      for(var key in resp) {
        for(var key2 in resp[key]) {
          if (typeof resp[key][key2] === 'object' && !Array.isArray(resp[key][key2])){
            console.log(key2);
            if (key2 === 'headers') continue;
            $scope.pics.push(resp[key][key2]);
          }
        }
      }
      console.log($scope.pics);
    });
  }

  $scope.getPics();

}]);