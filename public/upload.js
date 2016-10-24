angular.module('FileUpload',['ngFileUpload','ngAutocomplete'])
.controller('UploadCtrl', [ '$scope', 'Upload', 'Pictures', '$timeout', '$route', function($scope, Upload, Pictures, $timeout, $route) {
  // $scope.pics = $scope.pics || [];
  $scope.route = $route;

  $scope.uploadPic = function(file, details) {
    // console.log(file);
    // console.log('line 8', details.name);
    var picture = {
      filename: file.name,
      name: details.name,
      address: details.formatted_address,
      id: details.place_id
    }
    if (details.rating) picture.rating = details.rating;
    // console.log('line 12', picture);
    // file.upload = Upload.upload({
    //   url:'/pics',
    //   data: {file: file}//{location: $scope.location, file: file}
    // })
    // .then(function(resp) {
    //   $timeout(function() {
    //     file.result = resp.data;
    //   })
    // });
    file.upload = Upload.upload({
      headers: {'Authorization':'Client-ID 2f42bf48eb1d7bd'},
      url:'https://api.imgur.com/3/image',
      data: {'image': file}
    })
    .then(function(resp){
      // console.log('line 20 have a response',resp.data.data);
      picture.url = resp.data.data.link;
      $scope.picFile = null;
      Pictures.addOne(picture)
      .then(function(response) {
        picture.databaseID = response.data.databaseID;
        console.log(picture);
        console.log($scope.pics);
        $scope.pics.push(picture);
        console.log($scope.pics);
      });
      // document.getElementById('file').value = null;
    });
  }
}]);
