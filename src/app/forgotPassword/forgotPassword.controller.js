(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('ForgotPasswordController', ForgotPasswordController);

  /** @ngInject */
  function ForgotPasswordController(toastr) {
    var vm = this;

    vm.request = function(){
      toastr.info('Recuperando password de:' + vm.email);
    }
  }
})();
