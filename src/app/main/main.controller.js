(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, listService, userService) {
    var vm = this;

    vm.addPlayer = addPlayer; 
    vm.user = userService.currentUser;


    function addPlayer()
    {
      var player = { user : userService.currentUser, 'confirm' : false};
      listService.addPlayer(player);
    };

  }
})();
