angular.module('fileUpload',['ngFileUpload'])
.controller('UploadCtrl', [ '$scope', 'Upload', '$timeout', function($scope, Upload, timeout) {
  $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url:'/pics',
      data: {location: $scope.locataion, file: file}
    })
    .then(function(resp) {
      $timeout(function() {
        file.result = resp.data;
      })
    });
  }
}]);