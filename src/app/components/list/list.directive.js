(function() {
  'use strict';

  angular
    .module('cancha2')
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

    /** @ngInject */
    function CanchaListController(toastr) {
      var vm = this;

      vm.players = [
        { 'name' : 'JPP', 'email' : 'jppampin@gmail.com', 'comment': 'First User'},
        { 'name' : 'JPP2', 'email' : 'jppampin@gmail.com', 'comment': 'Second User'},
        { 'name' : 'JPP3', 'email' : 'jppampin@gmail.com', 'comment': 'Third User', 'confirm' : true},
        { 'name' : 'JPP4', 'email' : 'jppampin@gmail.com', 'comment': 'Fourth User', 'confirm': true}
      ];
      vm.update = function(player){
        toastr.info('Player ' + player.name + ' UPDATED!' );
      }
    }
  }

})();
