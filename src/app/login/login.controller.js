(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(toastr, userService, $state, $rootScope) {
    var vm = this;

    vm.user = {
      'username' : '',
      'password' : ''
    };

    vm.login = function () {
      userService.login(vm.user.username, vm.user.password).then(function(){
        $state.go('main');
      })
      .catch(function() {
        toastr.error('No se pudo loguear user / password incorrectos!');
      });
      
    };
  }
})();
