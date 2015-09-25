angular.module('capstone')

.controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	(function() {
		var getAll = new Bundles.getAll()
		$scope.bundles = getAll.query()

		var getAllTags = new Bundles.getTags()
		$scope.existingTags = getAllTags.query()
	})();

	$scope.delete = function (id) {
		var deleteSelection = new Bundles.deleteOne()
		deleteSelection.delete({id: id}, function(){
			console.log('Deleted: ' + id)
			var getAll = new Bundles.getAll()
			$scope.bundles = getAll.query()
		})
	}

})

.controller('addFormController', function (Bundles, $scope, Add) {
	$scope.activeTab = 'Story'

	$scope.bundleSubmit = function() {
		Add.addBundle({
				title: $scope.title,
				url: $scope.url,
				tags: $scope.tags
				// userId: $rootScope.currentUser._id *** ADD WHEN CURRENTUSER IS VALIDATED
			}).then(function() {
				$scope.title = null;
				$scope.url = null;
				$scope.tags = null;
				var getAll = new Bundles.getAll()
				$scope.bundles = getAll.query()
			})
	}

	$scope.storySubmit = function () {
		Add.addStory({
			title: $scope.storyTitle,
			description: $scope.storyDescription,
			tags: $scope.tags
			// userId: $rootScope.currentUser ADD USER ID WHEN LINK IS READY
		}).then(function() {
				$scope.addStoryForm = null
				$scope.storyTitle = null
				$scope.storyTags = null
				$scope.storyDescription = null
			})
	}

})

.controller('detailsCtrl', function ($scope, Authorize, $state) {
	$scope.logout = function() {
		Authorize.logout().then(function() {
			$state.go('prelogin') // CHANGE TO PUBLIC DASHBOARD
		})
	}

})



