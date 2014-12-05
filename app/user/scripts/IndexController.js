angular
    .module('user')
    .controller('IndexController', function($scope, User, supersonic) {

        $scope.update = function() {
          $scope.user.save().then(function(){
            supersonic.logger.log($scope.user);
          })
        }

        $scope.user = null;
        $scope.showSpinner = true;

        User.findAll().then(function(users){
          $scope.showSpinner = false;
          $scope.user = users.first;
          supersonic.logger.log(users.first);
        })

        // User.all().whenChanged(function(users) {
        //     $scope.$apply(function() {
        //         $scope.users = users
        //         $scope.showSpinner = false
        //         supersonic.logger.log($scope.users);
        //     })
        // })

    });