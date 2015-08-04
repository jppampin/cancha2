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
        var user = res.data;
        service.currentUser.username = user.local.email;
        service.currentUser.name = user.local.name;
        service.currentUser.email = user.local.email;
        service.currentUser.isLogged = true;
        service.currentUser.isAdmin = user.isAdmin;
      });
    };

    function setAnonymous(){
      service.currentUser.username = anonumousUser.username;
      service.currentUser.name = anonumousUser.name;
      service.currentUser.email = anonumousUser.email;
      service.currentUser.isLogged = anonumousUser.isLogged;
      service.currentUser.isAdmin = false;
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
