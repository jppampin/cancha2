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
        url: 'login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

      .state('main.forgotPassword', {
        url: 'forgotPassword',
        templateUrl: 'app/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'vm'
      })
      .state('main.admPartido', {
        url: 'admPartido',
        templateUrl: 'app/admPartido/match.html',
        controller: 'MatchController',
        controllerAs: 'vm'
      })
      .state('main.register', {
        url: 'register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
