(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(toastr, $state, userService) {
    var vm = this;

    vm.user = {
      name: '',
      email : '',
      password: '',
      confirmPassword : '',
    };

    vm.register = function(user){
      userService.signup(user).then(function(res){
        toastr.info('Registered!');
        $state.go('main.login');
    }).catch(function(error) {
      toastr.error('No se pudo registrar el usuario!');
    })
      
    };
  }
})();
