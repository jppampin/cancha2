(function() {
  'use strict';

  angular
    .module('cancha2')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
<<<<<<< HEAD
      .state('main.forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'app/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'forgotPassword'
      })      
=======
>>>>>>> f1f2858f455d679d636fb2386fe5dc7b185789c3
      .state('main.admPartido', {
        url: '/admPartido',
        templateUrl: 'app/admPartido/admPartido.html',
        controller: 'AdmPartidoController',
        controllerAs: 'admPartido'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
