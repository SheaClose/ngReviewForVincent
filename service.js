angular.module('app').service('service', function($http){
  /*This is the method for posting a new car object. I'm using the short hand
  here. Remember to immediately return a promise so that the Controller can
  have a .then and assign to scope after the promise is resolved.*/
  this.submitCar = function(obj){
    return $http.post('/api/vincent', obj)
    /*
      Above I've used the short hand for posting. $http.post takes two
      arguements. 1) the url to post to, 2) the thing that should actually be
      posted. This also could be written as follows:

      return $http({
      method: "POST",
      url: "/api/vincent",
      body: obj
    })
    */
  }




  /* This is the method that goes out and gets the star wars characters for us
  here I have attached the .then to the get request on the service promise
  to illustrate that the .then is just a part of the promise object, and can
  be attached either in the service or in the controller. If you are attaching
  the response to the $scope, you MUST have a .then in the controller, but if
  you  are going to modify the data in anyway, it is best practice to do that
  in the service before passing it to the controller. Just make sure you RETURN
  what ever your modifications are, else the controller will not recieve it. */

  this.getStarWarsCharacters = function() {
    return $http.get('http://swapi.co/api/people')
              .then(function(res){
                console.log(res);
                return res.data.results
              })
  }
})
