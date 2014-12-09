angular
    .module('example')
    .controller('FeedController', function($scope, supersonic, Post) {
        $scope.user = $scope.user || null;
        supersonic.bind($scope, "user");
        $scope.posts = [];

        Post.findAll().then(function(posts) {
            $scope.posts = posts;
        });

        Post.all().whenChanged(function(posts) {
            $scope.posts = posts;
            $scope.$apply();
        });

        $scope.like = function(post) {
            post.likes_count = post.likes_count || 0;
            post.likes_count++;
            post.likes = post.likes || [];
            post.likes.push($scope.user);
            post.save();
        }

        $scope.delete = function(post) {
          post.delete();
        }
    });