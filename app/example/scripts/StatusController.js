angular
    .module('example')
    .controller('StatusController', function($scope, supersonic, Post, s3Uploader) {
        $scope.user = $scope.user || null;
        supersonic.bind($scope, "user");
        $scope.navbarTitle = "Status";
        $scope.post = {};
        $scope.pickPhoto = function() {
            var options = {
                targetWidth: 340,
                targetHeight: 255,
            };
            supersonic.media.camera.getFromPhotoLibrary(options).then(function(result) {
                supersonic.logger.log(result);
                s3Uploader.upload(result, "test").then(function(data){
                  supersonic.logger.log(data);
                })
                //$scope.photoUrl = "data:image/jpeg;base64," + result;
                //$scope.$apply();
            });
        }

        $scope.save = function() {
          var date = new Date();
          $scope.post.date_created = date;
          $scope.post.date_modified = date;
          $scope.post.user = $scope.user;
          var post = new Post($scope.post);
          post.save().then(function(post){
            $scope.post = post;
            supersonic.ui.tabs.select(0);
          })
        }
    });