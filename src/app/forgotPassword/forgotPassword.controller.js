(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('ForgotPasswordController', ForgotPasswordController);

  /** @ngInject */
  function ForgotPasswordController(toastr, $state) {
    var vm = this;

    vm.request = function(){
      toastr.info('Recuperando password de:' + vm.email);
      $state.go('main.login');
    };
  }
})();
