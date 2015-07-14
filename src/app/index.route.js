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

      .state('main.forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'app/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'forgotPassword'
      })
      .state('main.admPartido', {
        url: '/admPartido',
        templateUrl: 'app/admPartido/admPartido.html',
        controller: 'AdmPartidoController',
        controllerAs: 'vm'
      })
      .state('main.register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
