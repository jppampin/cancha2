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
      var name = userService.currentUser.name;
      var email = userService.currentUser.email;
      var player = { user : { local : { name : name, email : email} }, 'confirmed' : false};
      listService.addPlayer(player);
    };

  }
})();
