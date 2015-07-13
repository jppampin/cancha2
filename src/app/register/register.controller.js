(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(toastr, $state) {
    var vm = this;

    vm.user = {
      name: '',
      username: '',
      email : '',
      password: '',
      confirmPassword : '',
    };

    vm.register = function(user){
      toastr.info('User ' + user.name + 'Registered!');
      $state.go('main.login');
    };
  }
})();
