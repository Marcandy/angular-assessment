angular.module('assessment')
  .service('mainService', function ($http) {

    this.getData = function () {
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      })
      .then(function (response) {
        console.log(response);
        return response.data
      })
    }

    this.getDetails = function (id) {
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products/' + id
      })
      .then(function (response) {
        console.log(response);
        return response.data
      })
    }
    
  })
