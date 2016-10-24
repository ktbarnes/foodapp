angular.module('FileUpload',['ngFileUpload','ngAutocomplete'])
.controller('UploadCtrl', [ '$scope', 'Upload', 'Pictures', '$timeout', function($scope, Upload, Pictures, $timeout) {

  $scope.uploadPic = function(file, details) {
    var picture = {
      filename: file.name,
      name: details.name,
      address: details.formatted_address,
      id: details.place_id
    }

    file.upload = Upload.upload({
      headers: {'Authorization':'Client-ID 2f42bf48eb1d7bd'},
      url:'https://api.imgur.com/3/image',
      data: {'image': file}
    })
    .then(function(resp){
      picture.url = resp.data.data.link;
      $scope.picFile = null;
      $scope.autocomplete = '';
      Pictures.addOne(picture);
    });
  }

}]);
