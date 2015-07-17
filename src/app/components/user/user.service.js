(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('userService', userService);

  /** @ngInject */
  function userService($log, $http) {
    var anonumousUser = {'username': 'anonymous', 'name' : 'Anonymous', 'email' : '', 'isAdmin': false, 'isLogged': false};
    var emptyUser =  {'username': '', 'name' : '', 'email' : '', 'isAdmin': false,'isLogged': false};

    var service = {
      currentUser: emptyUser,
      login: login,
      logout: logout
    };

    setAnonymous();

    return service;

    function login(username, password) {
      if (password === 'jpp'){
        service.currentUser.username = 'jppampin';
        service.currentUser.name = 'JPP';
        service.currentUser.email = 'jppampin@gmail.com';
        service.currentUser.isLogged = true;
        service.currentUser.isAdmin = true;
      };

      if(password == 'jpp2'){
        service.currentUser.username = 'jppampin2';
        service.currentUser.name = 'JPP - 2';
        service.currentUser.email = 'jppampin2@gmail.com';
        service.currentUser.isLogged = true;
        service.currentUser.isAdmin = false;
      };
    };

    function setAnonymous(){
      service.currentUser.username = anonumousUser.username;
      service.currentUser.name = anonumousUser.name;
      service.currentUser.email = anonumousUser.email;
      service.currentUser.isLogged = anonumousUser.isLogged;
    }

    function logout() {
      setAnonymous();
    };

  }
})();
