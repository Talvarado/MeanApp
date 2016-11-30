
angular.module('MainCtrl', []).controller('EducationController', function($scope) {
	$scope.tagline = 'Software Developer Intern, ABC Company';
	$scope.eduObjects = eduCtrl.list;
});
