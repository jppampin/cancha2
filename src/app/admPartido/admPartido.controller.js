(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('AdmPartidoController', AdmPartidoController);

  /** @ngInject */
  function AdmPartidoController() {
    var vm = this;
    vm.match = {
      'title' : 'pepe'
    };
  }
})();
