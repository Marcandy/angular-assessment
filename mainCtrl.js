angular.module('assessment')
  .controller('mainCtrl', function ($scope, mainService, $stateParams) {

    $scope.getData = mainService.getData().then(function (response) {
      $scope.products = response;
      console.log($scope.data);
    })

    $scope.item = $stateParams.id;


    $scope.getDetails = mainService.getDetails($scope.item).then(function (result) {
          console.log(result);
          $scope.detail = result;
        })



      $scope.display = false;

  })
  .directive('proDirective', function () {
    return {
      restrict: 'EA',
      templateUrl: './views/product-tmpl.html',
      scope: {
        product: '=',
        getInfo: '&',//having trouble based
        item: '='
      }
    }

  })
