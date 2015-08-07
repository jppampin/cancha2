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
    
    vm.update = update;
    vm.user = userService.currentUser;
    vm.canConfirm = canConfirm;
    vm.md5 = md5;

    listService.init().then(function initialized () {
      vm.title = listService.title;    
      vm.players = listService.players;
    })

    function update(player){
      listService.confirmPlayer(player).then(function  () {
        toastr.info('Player ' + player.user.local.name + ' Actualizado!' );
      }, function error (err) {
        toastr.info('Error al actualizar!' + err );
      })
      
    };

    function canConfirm(player){
      return vm.user.isAdmin || player.user.local.email == vm.user.username;
    }

  };


})();
