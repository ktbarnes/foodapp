angular.module('Trending',[])
.controller('TrendingCtrl', [ '$scope', 'Pictures', '$route', function($scope, Pictures, $route) {
  $scope.route = $route;
  $scope.pics = $scope.pics || [];

  $scope.getPics = function() {
    Pictures.getAll()
    .then(function(resp) {
      $scope.pics = [];
      for(var key in resp) {
        for(var key2 in resp[key]) {
          if (typeof resp[key][key2] === 'object' && !Array.isArray(resp[key][key2])){
            if (key2 === 'headers') continue;
            var pic = resp[key][key2];
            pic.databaseID = key2;
            $scope.pics.push(pic);
          }
        }
      }
    });
  }

  $scope.getPics();

  $scope.like = function(databaseID) {
    console.log('line 25 key trending.js $scope.like', databaseID);
    for(var i = 0; i < $scope.pics.length; i++) {
      if($scope.pics[i].databaseID === databaseID) {
        var picture = $scope.pics[i];
      }
    }
    picture.likes++;
    Pictures.like(picture);
  }

}]);
