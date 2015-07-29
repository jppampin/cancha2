(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('userService', userService);

  /** @ngInject */
  function userService($log, $http, paramUtils, toastr) {
    var anonumousUser = {'username': 'anonymous', 'name' : 'Anonymous', 'email' : '', 'isAdmin': false, 'isLogged': false};
    var emptyUser =  {'username': '', 'name' : '', 'email' : '', 'isAdmin': false,'isLogged': false};

    var service = {
      currentUser: emptyUser,
      login: login,
      logout: logout,
      signup : signup
    };

    setAnonymous();

    return service;

    function login(username, password) {
      var loginInfo = {
        email : username, 
        password : password
      };

      return $http({
        method: 'POST',
        url: '/api/login',
        data: paramUtils.serialize(loginInfo),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(function (res) {
        var data = res.data;
        service.currentUser.username = data.local.email;
        service.currentUser.name = data.local.name;
        service.currentUser.email = data.local.email;
        service.currentUser.isLogged = true;
        service.currentUser.isAdmin = false;
      });
    };

    function setAnonymous(){
      service.currentUser.username = anonumousUser.username;
      service.currentUser.name = anonumousUser.name;
      service.currentUser.email = anonumousUser.email;
      service.currentUser.isLogged = anonumousUser.isLogged;
    }

    function logout() {
      return $http({
        method: 'POST',
        url: '/api/logout'
      }).then(function(data){ 
        setAnonymous();
      });

    };

    function signup(newUser){
      var newUser = {
      name : newUser.name,
      email : newUser.email,
      password : newUser.password,
      confirmPassword : newUser.confirmPassword
      };

      return $http({
        method: 'POST',
        url: '/api/signup',
        data: paramUtils.serialize(newUser),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    };

  }
})();
