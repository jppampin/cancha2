(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('listService', listService);

  /** @ngInject */
  function listService($log, $resource) {
    var players =  [];
    var matchApi = $resource('/api/match');

    var service = {
      players: players,
      addPlayer : addPlayer
    };

    init();

    return service;

    function init(){
      matchApi.query().$promise.then(function(matches){
        var match = matches[0];
        match.players.forEach(function(player){
          service.players.push(player);
        });
      });
    }

    function addPlayer(player) {
      players.forEach(function(playerListed){
        if(player.user.local.email === playerListed.user.local.email){
          return;
        }
      });

      players.push(player);
    }


  }
})();
