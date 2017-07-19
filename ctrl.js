angular.module('app').controller('ctrl', function($scope, service){

  /*Here, we just want to assign the people after getting it from the service
  method. There is no need to create a function that invokes the
  service.getStarWarsCharacters because we can simply invoke it immediately.
  Beacuse it is a promise that is returned we can attach a .then and a .catch
  Always console.log your response to ensure the data is coming in the way
  you thing that it is. Once it's in we may attach it to $scope.people for
  interpolation by the view.*/
  service.getStarWarsCharacters()
  .then(function(response){
    console.log(response);
    $scope.people = response;
  })
  .catch(function(response){
    console.log(response)
  })



  /*this is the method that is invoked when the button is pressed, here we
  take in the car object, invoking the service objects submitCar method
  and pass it the car object. That method returns a promise, thus we are
  able to attach ".then" with a call back which when invoked will have a
  reponse object passed as an argument. We then assign it to $scope.cars so
  that it can be displayed on the screen via interpolation. */
  $scope.submitCar = function(obj){
    service.submitCar(obj).then(function(res){
      $scope.cars = res.data.body;
    })
  }
})
