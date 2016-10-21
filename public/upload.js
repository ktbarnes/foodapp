angular.module('fileUpload',['ngFileUpload','ngAutocomplete'])
.controller('UploadCtrl', [ '$scope', 'Upload', 'Pictures', '$timeout', function($scope, Upload, Pictures, $timeout) {
  $scope.pics = $scope.pics || [];
  
  $scope.uploadPic = function(file, details) {
    console.log(file);
    console.log('line 8', details);
    var picture = {
      address: details.formatted_address,
      id: details.place_id
    }
    console.log('line 12', picture);
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
      picture.url = resp.data.data.link;
      $scope.picFile = null;
      Pictures.addOne(picture);
      // document.getElementById('file').value = null;
    });
  }
}]);