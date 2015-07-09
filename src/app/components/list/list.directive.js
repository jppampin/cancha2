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
    function CanchaListController() {
      var vm = this;

      vm.players = [
        { 'name' : 'JPP', 'email' : 'jppampin@gmail.com', 'comment': 'First User'},
        { 'name' : 'JPP2', 'email' : 'jppampin@gmail.com', 'comment': 'Second User'},
        { 'name' : 'JPP3', 'email' : 'jppampin@gmail.com', 'comment': 'Third User'},
        { 'name' : 'JPP4', 'email' : 'jppampin@gmail.com', 'comment': 'Fourth User'}
      ]
    }
  }

})();
