angular
    .module('user')
    .controller('IndexController', function($scope, User, supersonic) {
        $scope.user = {};
        supersonic.bind($scope, "user");

        var query = { "email": "julian@leaf.me" };
        User.findAll({query: JSON.stringify(query)}).then(function(users) {
            $scope.showSpinner = false;
            $scope.user = users[0];
            supersonic.logger.log(users);
        })

        $scope.save = function() {
            $scope.user.save().then(function() {
                // $scope.showSpinner = true;
                supersonic.logger.log($scope.user);
                supersonic.ui.tabs.select(0);
            })
        }

        // $scope.user.whenChanged(function(user) {
        //     $scope.$apply(function() {
        //         $scope.users = users
        //         $scope.showSpinner = false
        //         supersonic.logger.log($scope.users);
        //     })
        // })

    });