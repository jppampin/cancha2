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
      .state('main.admPartido', {
        url: '/admPartido',
        templateUrl: 'app/admPartido/admPartido.html',
        controller: 'AdmPartidoController',
        controllerAs: 'admPartido'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
