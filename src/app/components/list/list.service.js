(function() {
  'use strict';

  angular
    .module('cancha2')
    .factory('listService', listService);

  /** @ngInject */
  function listService($log, $resource, $http) {
    var players =  [];
    var matchApi = $resource('/api/match');

    var service = {
      title : '',
      matchId : null,
      players: players,
      addPlayer : addPlayer, 
      confirmPlayer : confirmPlayer
    };

    init();

    return service;

    function init(){
      // matchApi.query().$promise.then(function(matches){
      //   var match = matches[0];
      //   service.matchId = match._id;
      //   match.players.forEach(function(player){
      //     service.players.push(player);
      //   });
      // });

      $http({
        method: 'GET',
        url: '/api/match/getLast' ,
        headers: { 'Content-Type': 'application/json' }
      }).then(function (res) {
        var match = res.data;
        service.title = match.title;
        service.matchId = match._id;
        match.players.forEach(function(player){
          service.players.push(player);
        });
      });
    }

    function addPlayer(player) {
      var hasPlayer = _.find(players, function(playerListed){
        return player.user.local.email === playerListed.user.local.email;
      });

      if(hasPlayer)
        return;

      return $http({
        method: 'POST',
        url: '/api/match/' + service.matchId + '/addPlayer' ,
        data: player,
        headers: { 'Content-Type': 'application/json' }
      }).then(function () {
        return players.push(player);        
      });

    }

    function confirmPlayer(player){
      return $http({
        method: 'POST',
        url: '/api/match/' + service.matchId + '/confirmPlayer' ,
        data: player,
        headers: { 'Content-Type': 'application/json' }
      });      
    }

  }
})();
