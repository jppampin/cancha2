(function() {
  'use strict';

  angular
    .module('cancha2')
    .controller('MatchController', MatchController);

  /** @ngInject */
  function MatchController(toastr, matchService, $state) {
    var vm = this;

    vm.match = {
      'title' : ''
    };
    vm.addMatch = addMatch;

    function addMatch(){
      var match = vm.match;

      matchService.addMatch(match).then(function  () {
        toastr.info('Partido Creado!');
        $state.go('main');
      }, function error (err) {
        toastr.error('Error al crear el partido!');
      });
    }
  }
})();
