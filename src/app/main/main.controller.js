(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, listService) {
    var vm = this;

    vm.addPlayer = function()
    {
      var player = { 'name' : 'JPP', 'email' : 'jppampin@gmail.com', 'comment': 'First User', 'confirm' : false};
      listService.addPlayer(player);
    }
  }
})();
