(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('CanchaListController', CanchaListController)
    .directive('canchaList', canchaList);


  /** @ngInject */
  function canchaList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/list/list.html',
      scope: {},
      controller: CanchaListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;


  };

  /** @ngInject */
  function CanchaListController(toastr, listService, userService) {
    var vm = this;

    vm.players = listService.players;
    vm.update = update;
    vm.user = userService.currentUser;

    function update(player){
      toastr.info('Player ' + player.name + ' UPDATED!' );
    };
    
  };


})();
