angular.module('fileUpload',['ngFileUpload'])
.controller('UploadCtrl', [ '$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {
  $scope.pics = $scope.pics || [];
  
  $scope.uploadPic = function(file) {
    console.log(file);
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
      console.log('line 20 have a response',resp.data.data);
    });
  }
}]);