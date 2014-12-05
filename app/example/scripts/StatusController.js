angular
    .module('example')
    .controller('StatusController', function($scope, supersonic) {
        $scope.navbarTitle = "Status";
        $scope.pickPhoto = function() {
            var options = {
                targetWidth: 340,
                targetHeight: 255,
                destinationType: "dataURL"
            };
            supersonic.media.camera.getFromPhotoLibrary(options).then(function(result) {
                supersonic.logger.log(result);
                $scope.photoUrl = "data:image/jpeg;base64," + result;
                $scope.$apply();
            });
        }

        $scope.post = function() {
            supersonic.ui.tabs.select(0);
        }
    });