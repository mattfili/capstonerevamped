'use strict';

angular.module('capstone').controller('bDashController', function ($scope, Bundles, $modal, Add, $rootScope) {

	$scope.openModal = function () {
		var modalInstance = $modal.open({
			templateUrl: 'assets/addModal.html',
			controller: 'modalInstance',
			windowClass: '.reveal-modal'
		});

		modalInstance.result.then(function (information) {
			Add.addBundle({
				title: information.title,
				url: information.url,
				userId: $rootScope.currentUser._id
			});
		});
	};
}).controller('modalInstance', function ($scope, $modal, Add, $modalInstance) {

	$scope.information = {
		title: $scope.title,
		url: $scope.url
	};

	$scope.submit = function () {
		$modalInstance.close($scope.information);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9iRGFzaC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FFekIsVUFBVSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRTs7QUFFbEYsT0FBTSxDQUFDLFNBQVMsR0FBRyxZQUFXO0FBQzdCLE1BQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDOUIsY0FBVyxFQUFFLHNCQUFzQjtBQUNuQyxhQUFVLEVBQUUsZUFBZTtBQUMzQixjQUFXLEVBQUUsZUFBZTtHQUM1QixDQUFDLENBQUM7O0FBRUosZUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxXQUFXLEVBQUU7QUFDaEQsTUFBRyxDQUFDLFNBQVMsQ0FBQztBQUNiLFNBQUssRUFBRSxXQUFXLENBQUMsS0FBSztBQUN4QixPQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUc7QUFDcEIsVUFBTSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRztJQUNsQyxDQUFDLENBQUM7R0FDSCxDQUFDLENBQUE7RUFDRixDQUFBO0NBRUQsQ0FBQyxDQUNELFVBQVUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUU7O0FBRTVFLE9BQU0sQ0FBQyxXQUFXLEdBQUc7QUFDcEIsT0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0FBQ25CLEtBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztFQUNmLENBQUE7O0FBRUQsT0FBTSxDQUFDLE1BQU0sR0FBRyxZQUFZO0FBQzNCLGdCQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtFQUN4QyxDQUFBOztBQUVELE9BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUMzQixnQkFBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUNqQyxDQUFDO0NBR0QsQ0FBQyxDQUFBIiwiZmlsZSI6InNyYy9qcy9iRGFzaC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2NhcHN0b25lJylcblxuLmNvbnRyb2xsZXIoJ2JEYXNoQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsIEJ1bmRsZXMsICRtb2RhbCwgQWRkLCAkcm9vdFNjb3BlKSB7XG5cblx0JHNjb3BlLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtb2RhbEluc3RhbmNlID0gJG1vZGFsLm9wZW4oe1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9hZGRNb2RhbC5odG1sJyxcblx0XHRcdFx0Y29udHJvbGxlcjogJ21vZGFsSW5zdGFuY2UnLFxuXHRcdFx0XHR3aW5kb3dDbGFzczogJy5yZXZlYWwtbW9kYWwnXG5cdFx0XHR9KTtcblxuXHRcdG1vZGFsSW5zdGFuY2UucmVzdWx0LnRoZW4oZnVuY3Rpb24gKGluZm9ybWF0aW9uKSB7XG5cdFx0XHRBZGQuYWRkQnVuZGxlKHtcblx0XHRcdFx0dGl0bGU6IGluZm9ybWF0aW9uLnRpdGxlLFxuXHRcdFx0XHR1cmw6IGluZm9ybWF0aW9uLnVybCxcblx0XHRcdFx0dXNlcklkOiAkcm9vdFNjb3BlLmN1cnJlbnRVc2VyLl9pZFxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG59KVxuLmNvbnRyb2xsZXIoJ21vZGFsSW5zdGFuY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWwsIEFkZCwgJG1vZGFsSW5zdGFuY2UpIHtcblxuJHNjb3BlLmluZm9ybWF0aW9uID0ge1xuXHR0aXRsZTogJHNjb3BlLnRpdGxlLFxuXHR1cmw6ICRzY29wZS51cmxcbn1cblxuJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0JG1vZGFsSW5zdGFuY2UuY2xvc2UoJHNjb3BlLmluZm9ybWF0aW9uKVxufVxuXG4kc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuXHQkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbn07XG5cblxufSkiXX0=